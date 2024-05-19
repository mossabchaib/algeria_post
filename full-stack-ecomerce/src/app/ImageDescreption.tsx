'use client'
import { useAppDispatch } from '@/Golobal-Redux/hooks'
import React from 'react'
import Image from 'next/image'
import Ecomerce from './../../public/image/baby-onesie-beige-1.avif'
import Ecomerce2 from './../../public/image/bag-1-dark.avif'
import { addId } from '@/Golobal-Redux/idSlice/DataSlice'
import shouse from './../../public/image/shoes-1.avif'
import Link from 'next/link'
import StyleP from './product/cart/StyleP.module.css'
import st from './st.module.css'
export default function ImageDescreption({data}:any) {
  const dispatch=useAppDispatch();
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
  return (
    <div className={st.big} >
    <div className={st.big2} style={{background:' #000',}}>
    {

<div  key={data[0].id}  >
    <Link href={`/product/cart/${data[0].id}`}>
        <div onClick={()=>sendId(data[0])}>
          <div className={st.im} > 
              
          <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={Ecomerce}
        sizes="100vw"
        // Make the image display full width
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>

          </div>
 
    </div>
     </Link>
     <div className={st.info}>
     <div className={StyleP.information} style={{
  
 width:'100%'
     }} onClick={()=>sendId(data[0])}>
         <h3 style={{fontSize:'15px'}}>{data[0].title.slice(0,15)}</h3>
         <p className={StyleP.p}>{data[0].price} usd</p>
         </div>
     </div>
     </div>
}
</div>
<div className={st.item2} >
    <div style={{marginBottom:'10px'}} >
    {

      

<div className={st.item} key={data[2].id}  style={{margin:'0',padding:'0',marginBottom:'10px'}}  >
<Link href={`/product/cart/${data[2].id}`}>
    <div onClick={()=>sendId(data[2])}>
      <div className={st.im}> 
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={shouse}
        sizes="100vw"
        // Make the image display full width
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
      </div>

</div>
 </Link>
<div style={{position:'absolute',top:'75%'}}>
 <div className={StyleP.information} style={{
  
  width:'100%'
      }}>
     <h3 style={{fontSize:'15px'}}>{data[2].title.slice(0,15)}</h3>
     <p className={StyleP.p}>{data[2].price} usd</p>
     </div>
 </div>
 </div>

}
    </div>
    <div className={st.big3}>
    {

      

<div className={st.item3} key={data[1].id} style={{marginBottom:'0'}}>
<Link href={`/product/cart/${data[1].id}`}>
    <div onClick={()=>sendId(data[1])}>
      <div className={st.im}> 
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        // Importing an image will
        // automatically set the width and height
        src={Ecomerce2}
        sizes="100vw"
        // Make the image display full width
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>

      </div>

</div>
 </Link>
 <div className={st.info}>
 <div className={StyleP.information} style={{
 width:'100%'
      }}>
     <h3 style={{fontSize:'15px'}}>{data[1].title.slice(0,15)}</h3>
     <p className={StyleP.p}>{data[1].price} usd</p>
     </div>
     </div>
 </div>

}
    </div>
    </div>    </div>
    



  )
}
