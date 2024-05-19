import React from 'react'
import { useAppDispatch,useAppSelector } from '@/Golobal-Redux/hooks'
import { addNote } from '@/Golobal-Redux/buySlice/buy'
import style from './style.module.css'
import { openSid } from '@/Golobal-Redux/searshSlice/wrteSlice'
import Link from 'next/link'
export default function Add(id:any) {
  const dispatch=useAppDispatch()
  const buy=(product:any)=>{
  
    dispatch(addNote(product))
    dispatch(openSid(true))
  }
  return (
    <div>
         <Link href=""><button className={style.buybutton} onClick={()=>buy(id)}>Add to Cart</button></Link>
      
    </div>
  )
}