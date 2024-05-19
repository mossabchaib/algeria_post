"use client"
import React, { useState } from 'react'
import MailList from './Box_User_in_Archive'
import style from './Styles/Style.module.css'
import { usePathname } from 'next/navigation'
 type platform={
    Platform:string,
    uri:string,
 }
export default function User() {
  const pathname=usePathname();
  console.log("t:",pathname.length)
  return (
    <div  className={pathname.length==8?style.Container:style.Containerhiden} style={{width:"450px"}}>
      <div className={style.header}>
        <h2 className={style.nameUser}>Archive</h2>
        </div>
        <hr />
     <div>
        <MailList/>
     </div>
      </div>
  
  )
}
