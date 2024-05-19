'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import StyleP from '../../carousel/car.module.css'
import Link from 'next/link'
import Image from '../../product/cart/Image'
import {Path} from './Path'
export default function CategoryChoice(data:any) {
  const pathName=Path();
console.log(data.data.data)
 return (
  <div>
     
  <div className={StyleP.cart}>
 {
data.data.map((d:any)=>(
  d.category==pathName? (
     <div className={StyleP.item} key={d.id} >
     <Link href={`/product/cart/${d.id}`}>
         <div >
           <div className={StyleP.im}> 
             <Image idimage={d.image}/>
           </div>
  
     </div>
      </Link>
      <div className={StyleP.information}>
          <h3 style={{fontSize:'15px'}}>{d.title.slice(0,15)}</h3>
          <p className={StyleP.p}>{d.price} usd</p>
          </div>
      </div>

 ):(<></>)
))}
</div>
</div>
  )
}
