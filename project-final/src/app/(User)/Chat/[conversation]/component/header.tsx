'use client'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import style from '../../Component/Styles/conversation.module.css'
import { useRouter } from 'next/navigation';
export default function header() {
  const router=useRouter();
  return (
    <div className={style.big}>
    <div className={style.containerHeader} style={{display:"flex",alignItems:"center",width:"100%"}}>
       <div className={style.infoUser} style={{width:"100%"}}>
       <IoIosArrowBack size={35} onClick={()=>router.back()}/>
               <div className={style.imgUser}>
            <p className={style.nameUser}>MC</p>
           </div>
            <p className={style.nameUser} style={{marginLeft:"6px"}}>mossab chaib</p>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",width:"70%"}}>
            <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" alt="" />
        </div>
        <hr />
    </div>
    </div>
  )
}
