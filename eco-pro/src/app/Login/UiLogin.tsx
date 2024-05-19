'use client'
import { useState } from 'react'
import style from './style.module.css'
import Link from 'next/link'
import { useAppSelector } from '@/Golobal-Redux/hooks'
import { RootState } from '@/Golobal-Redux/Store'
import { useRouter } from 'next/navigation'
export default function UiLogin() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setjob] = useState("user");
  const [password, setPassword] = useState("");
  const [confarmpassword, setconfarmpassword] = useState("");
  const router=useRouter()
  //=====================================
  const handleSubmit = async (e:any) => {
    e.preventDefault();
console.log(firstName)
    if (!firstName||!lastName|| !email || !password||!confarmpassword) {
alert("All fields are necessary.");
      return;
    }
if(password!=confarmpassword){
  alert('false');
  return;
}
    try {
      const res = await fetch("/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({lastName, email ,password,job}),
      })
      if (res.ok) {
        console.log('hi')
        const form = e.target;
        form.reset();
        alert("creete acounte secses")
        router.push('/')
      } else {
        console.log("User registration failed.");
      }
    }  catch(error){
        console.log(error)
      }}
     //============================================
  const nav:any=useAppSelector((stat:RootState)=>stat.nv)
  return (
    <>
    {
    nav.mode==1 ? <div></div> :
    <div className={style.FormContainer}>

    <div className={style.logoContainer}>Welcome!</div>

    <div className={style.socialButtons}>
     
      <button className={`${style.socialButton} ${style.facebook}`}>
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#4285f4" d="M17.64 11.999c0-.34-.02-.68-.06-1.02H12v2.04h3.54c-.12.82-.48 1.54-1.02 2.08v1.74h1.62c.94-1.08 1.48-2.52 1.48-4.8z"/>
  <path fill="#34a853" d="M12 21c1.38 0 2.63-.47 3.62-1.26l-1.74-1.32c-.44.3-.96.48-1.48.48-1.14 0-2.11-.76-2.46-1.78H6.96v1.12c1.02 1.98 3.06 3.3 5.28 3.3z"/>
  <path fill="#fbbc05" d="M9.54 14.82c-.24-.72-.36-1.48-.36-2.28s.12-1.56.36-2.28V8.22H6.96a9.01 9.01 0 0 0 0 7.56l2.58-1.96z"/>
  <path fill="#ea4335" d="M12 6.58c.84 0 1.62.3 2.22.84l1.66-1.68C14.62 4.98 13.38 4 12 4 9.78 4 7.86 5.16 6.96 7.02l2.58 1.98c.35-1.02 1.32-1.68 2.46-1.68z"/>
  <path fill="none" d="M0 0h24v24H0z"/>
</svg>

        <span>creete an account with Facebook</span>
      </button>

      
    </div>

    <div className={style.line}></div>

    <form className={style.form}>
      <div className={style.formGroup}>
        <label htmlFor="first Name">First name</label>
        <input required placeholder="Enter your First name" name="email" id="email" type="text"   onChange={(e) => setfirstName(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="email">Last Name</label>
        <input required placeholder="Enter your Last Name" name="email" id="email" type="text"   onChange={(e) => setlastName(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="email">Email</label>
        <input required placeholder="Enter your email" name="email" id="email" type="text"  onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">Password</label>
        <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className={style.formGroup}>
        <label htmlFor="password">confarme your Password</label>
        <input required name="password" placeholder="Enter your password" id="password" type="password"  onChange={(e) => setconfarmpassword(e.target.value)}/>
      </div>
      <button type="submit" className={style.formSubmitBtn} onClick={handleSubmit}>
       creet an account
      </button>
    </form>

    <p className={style.signupLink}>
     do you have an account?
      <Link className={`${style.signupLink} ${style.link}`} href="/Signe">
        Sign up now
      </Link>
    </p>
  </div>}</>
  )
}


