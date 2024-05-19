'use client'
import { useAppDispatch,useAppSelector } from '@/Golobal-Redux/hooks'
import React from 'react'
import StyleP from './StyleP.module.css'
import Image from './Image'
import Input from '../../../components/Input'
import Link from 'next/link'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import { RootState } from '@/Golobal-Redux/Store'
export default function Cart(data: any) {
  
const dispatch=useAppDispatch()
const mode=useAppSelector((mode:RootState)=> mode.write)
const sendId=(id:any)=>{
    dispatch(addId(id))
     }
    
  return (
 <div className={StyleP.containar}>
    <div className={StyleP.Searsh}><Input/></div>

    <div className={StyleP.cart} >
    {
      mode.mode=='true'?<div></div>:
  data.data.map((data:any)=>{
      return (
          <div className={StyleP.item} key={data.id} >
          <Link href={`/product/cart/${data.id}`}>
              <div onClick={()=>sendId(data)}>
                <div className={StyleP.im}> 
                  <Image idimage={data.image}/>
                </div>
       
          </div>
           </Link>
           <div className={StyleP.information}>
               <h3 style={{fontSize:'15px'}}>{data.title.slice(0,15)}</h3>
               <p className={StyleP.p}>{data.price}$</p>
               </div>
           </div>
          
    )})}
</div>
</div>
  )
}
