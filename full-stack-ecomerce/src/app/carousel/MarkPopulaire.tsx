import React from 'react'
import StyleP from '../product/cart/StyleP.module.css'
import Image from "../product/cart/Image";
export default function MarkPopulaire({data}:any) {
  return (
    <div>
      <div className={StyleP.cart}>
    {
 data.map((data:any)=>{
      
      return (
          <div className={StyleP.item} key={data.id}>
          <Image idimage={data.image}/>
        </div>
    )})}
</div>
    </div>
  )
}
