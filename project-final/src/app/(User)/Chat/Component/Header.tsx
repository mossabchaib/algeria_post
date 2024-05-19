"use client"
import React, { useState } from 'react'
import MailList from './Box_User'
import style from './Styles/Style.module.css'
import { Search, } from "lucide-react"
import { Input } from "@/registry/new-york/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { usePathname } from 'next/navigation'
 type platform={
    Platform:string,
    uri:string,
 }
export default function User() {
  const pathname=usePathname();
    const [dataCategory,setdataCategory]=useState<platform[]>([
       { Platform:'All',uri:''},
        { Platform:'Telegram',uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png'},
       { Platform:'Messenger', uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png',},
       { Platform:'whtasapp', uri:'https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-512.png'},
       { Platform:'viber',uri:'https://w7.pngwing.com/pngs/114/883/png-transparent-viber-messaging-apps-instant-messaging-iphone-skype-purple-violet-logo.png'}
    ])
    const [functionmail,setfunctionmail]=useState<String>('mail')
    const [functionPlatform,setfunctionPlatform]=useState<String>('All')
  return (
    <div className={pathname.length>=6?style.Big_Container:style.Big_Container_true} >
    <div className={style.Container} style={{borderRadius:"10px",marginTop:"10px",marginRight:"10px"}}>
      <div className={style.header}>
        <h2 className={style.nameUser}>Chat</h2>
        <div className={style.fonction}>
            <button  className={functionmail=='mail'?style.fonction_text:style.fonction_text_True} onClick={()=>setfunctionmail('unread')}>All mail</button>
            <button className={functionmail=='unread'?style.fonction_text:style.fonction_text_True} onClick={()=>setfunctionmail('mail')}>unread</button>
        </div>
        </div>
        <hr />
        <div className={style.ContainerSearchTags}>
          <div className={style.inputSearchwidth}>
        <div   className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
                </form>
                </div>
                </div>
                <div >
                <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DialogTrigger>
      <div >
      <DialogContent className="sm:w-[300px]  justify-center">
        <DialogHeader>
          <DialogTitle style={{fontSize:"25px"}}>filter</DialogTitle>
          <hr />
      </DialogHeader>
        <div className="flex items-center space-x-2">
      
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        by Usernme
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        by keyword
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        by contact name
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        by data
      </label>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"5px"}}>
       
          <Button type="submit" className="bg-blue-600">Filtter</Button>
           <Button variant="secondary">cancel</Button> 
          </div>
      </DialogContent>
      </div>
    </Dialog>
             
    </div>
   
      </div>
<div className={style.bigContainerPlatform}>
     {dataCategory.map((data:platform,index:number)=>
      <button key={index}  className={functionPlatform==data.Platform?style.ContainerPlatformTrue: style.ContainerPlatform} onClick={()=>setfunctionPlatform(data.Platform)}>
      <div>
     {data.uri!=''? <img src={data.uri} alt={data.Platform} className={style.imagePlatform}/>:null}
      </div>
     <p style={{width:"90px"}} className={style.fonction_text}>{data.Platform}</p>

    </button>
     ) }  
     </div>
     <div>
        <MailList/>
     </div>
      </div>
      </div>
  )
}
