
import { useAppDispatch } from 'src/Golobal-Redux/hooks'
import { addId } from 'src/Golobal-Redux/idSlice/DataSlice'
import Link from 'next/link'
import React from 'react'
import StyleP from '../../../carousel/car.module.css'
import Image from '../Image'
export default function Categoryy(data:any) {

const category=data.Category
    const dispatch=useAppDispatch()
    const sendId=(id:any)=>{
      dispatch(addId(id))
        }
  return (
    <div>
     
    <div className={StyleP.cart}>
   {
 data.data.data.map((data:any)=>(
 category==data.category ?(
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
            <p className={StyleP.p}>{data.price} usd</p>
            </div>
        </div>

   )
   :(<></>)
   ))}
</div>
</div>
  )
}
