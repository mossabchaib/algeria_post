'use client'
import React, { useEffect, useState } from 'react';
import styles from './StyleN.module.css';
import Link from 'next/link';
import { GetProduct } from './Menu-page';
import { useAppSelector } from 'src/Golobal-Redux/hooks';
export default function Menu(dataa:any) {
const data=useAppSelector((data:any)=>data.all.notes.data)
console.log(data)
    const [info, setinfo] = useState<any>(null);
    const [category, setCategory] = useState<any[]>([]);

   data.map((item: any) => {
             if (!category.includes(item.category)) {
             category.push(item.category)}})

            console.log('info:',category)
          

  return (
    <div>
    {category &&
       category.map((item: any) => (
     
        <Link  href={`/category-Product/${item}`} className={styles.a2}>
      {item}
              </Link>
            
      )
       )}  
    
      
      
    </div>
  );
}
