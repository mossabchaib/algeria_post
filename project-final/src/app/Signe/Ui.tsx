'use client'
import { useState } from 'react'
import axios from 'axios';
import style from './style.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/Redux/hooks';
import {Token_user} from '@/Redux/Token/Token';
export default function Ui() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Click, setClick] = useState(false);
  const [error,seterror]=useState('')
  const router=useRouter()
  const dispatch=useAppDispatch();
   const loginUser = async () => {
    setClick(true)
     try {
        const response = await axios.post('https://pbc34zvg-3000.euw.devtunnels.ms/api/v1/auth/login', {
          email: email,
          password: password
        });
        console.log("res",response)
       if(response.data==200){
         dispatch(Token_user(response));
         router.push("/(User)/Chat");
       }
     } catch (error:any) {
       seterror(error);
        throw new Error('Failed to login');
     }
   };
   


  return (<>
   
        <div className={style.FormContainer}>

    <div className={style.logoContainer}>Welcome Back!</div>

  

    <div className={style.line}></div>

    <div className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="email">Email</label>
        <input required placeholder="Enter your email" name="email" id="email" type="text"   onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="password">Password</label>
        <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setPassword(e.target.value)}  />
      </div>
<button type='submit' onClick={loginUser} className={`bg-blue-500 ${!Click? style.formSubmitBtn:style.formSubmitBtnClose}`}>
        {!Click?<div>Sign In</div>: <div> Loading... </div>
}
  </button>
         </div>
    <p className={style.signupLink}>
      Don't have an account? 
      <Link className={`${style.signupLink} ${style.link}`} href="/Login">
        Creet acount
      </Link>
    </p>
  </div>
  </>
  )
}
