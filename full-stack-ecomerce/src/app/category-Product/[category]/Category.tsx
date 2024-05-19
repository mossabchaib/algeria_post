'use client'
import { useState } from 'react'
import React from 'react'
import styled from './style.module.css'
import {Path} from './Path'
import Link from 'next/link'
export default function Category(data:any) {
  const [category, setCategory] = useState<any[]>([]);
const pathName=Path();
data.data.map((item: any) => {
  if (!category.includes(item.category)) {
  category.push(item.category)}})
console.log(pathName)
  return (
    <div>
  
    <div className={styled.continer}>
    
      {
       category &&
       category.map((item: any) => (
   
          <div className={styled.continer2} key={item} >
          <Link href={`/category-Product/${item}`}>  <h5 className={`${pathName==item?styled.p1:styled.p}`}>{item.slice(0,5)}</h5></Link>
            </div>
        ))
      }
    
    </div>
    <h1 className={styled.h1}>{pathName}</h1>
   
    </div>
  )
}
