"use client"
import { RxSketchLogo } from 'react-icons/rx';
import Style from './Sid_Bar.module.css'
import Link from "next/link"
import React, { useEffect, useState } from "react"
  import { FaArchive } from "react-icons/fa";
  import { IoChatbubbleOutline } from "react-icons/io5";
  import { IoChatbubbleSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation'
import Add from './Add_Platform/Add'
import { useAppSelector } from '@/Redux/hooks';
import { RootState } from '@/Redux/Store';
export default function Nav() {
    const router:any=usePathname();
    const [path_Active,setpath_Active]=useState();
    const Token=useAppSelector((Token:RootState)=>Token.Token.Token);
      const [links,setlinks]=React.useState<any[]>([
        {
            id:1,
            title: "Social",
            label: "972",
            icon_Active: IoChatbubbleSharp,
            icon_Not_Active:IoChatbubbleSharp,
            variant: "ghost",
            Link:"/Chat",
            is_Active:false
          },
          {
            id:2,
            title: "Updates",
            label: "342",
            icon_Active: IoChatbubbleOutline,
            icon_Not_Active:IoChatbubbleOutline,
            variant: "ghost",
            Link:"/Chat",
            is_Active:false
          },
          {
            id:3,
            title: "Forums",
            label: "128",
            icon_Active:  FaArchive,
            icon_Not_Active:FaArchive,
            variant: "ghost",
            Link:"/Archive",
            is_Active:true
          },
          {
            id:4,
            title: "Shopping",
            label: "8",
            icon_Active: IoChatbubbleSharp,
            icon_Not_Active:IoChatbubbleOutline,
            variant: "ghost",
            Link:"/profile",
            is_Active:false
          }
          ])
//     const handelRoute=(id:number)=>{
// for (let index = 1; index < links.length; index++) {
// if(id==index) links[id].is_Active=true;
// else if(links[index].is_Active) links[id].is_Active=false;
// }
//     }
console.log("route:",router[1]==links[0].Link[1],router[router.length-1])
  return (
<div className={Style.big_Container} style={{background:"#f6f6f6",paddingTop:"20px",height:"100vh"}}>
      <div className={'bg-blue-700 text-white p-3 rounded-lg inline-block'}  style={{marginBottom:"70px",marginLeft:"10px"}}>
              <RxSketchLogo size={20} />
            </div> 
      <nav className={Style.Links}>
       {
        links.map((Linksicon:any,index:number)=>{
             if(Linksicon.id!=2&&Linksicon.id!=4)
                return <div key={Linksicon.id} className={  Linksicon.Link[1]==router[1]?Style.iconstrue:Style.icons} >
      <Link href={Linksicon.Link}>
         {
        Linksicon.Link[1]==router[1]? 
    <Linksicon.icon_Active className="h-6 w-6 c-gray " />
         :
         <Linksicon.icon_Not_Active className="h-6 w-6 c-gray " color="black" />
        }
        </Link>
    </div>
    
    else if(Linksicon.id==2) 
    return <div key={Linksicon.id} className={`bg-blue-600 ${Style.addplatform}`}  >
     <Add/>
</div>
else 
return  <div className={Linksicon.Link[1]==router[1]?Style.imgUsertrue:Style.imgUser}>
 {/* <p className={Style.nameUser}>MC</p> */}
 <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt=""  className={Linksicon.Link[1]==router[1]?Style.imgUsertrue:Style.imgUser}/> 
</div>
}
   
        )
       }
      </nav>
    </div>
  )
}
