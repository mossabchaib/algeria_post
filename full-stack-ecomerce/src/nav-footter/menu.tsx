'use client'
import React, { useEffect, useState } from 'react';
import styles from './StyleN.module.css';
import Link from 'next/link';
export default function Menu(data:any) {
 const [info, setinfo] = useState<any>(data.data);
    const [category, setCategory] = useState<any[]>([ "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"]);
    // data.data.map((item: any) => {
    //          if (!category.includes(item.category)) {
    //          category.push(item.category)}})

    //          console.log('info:',category)         
    

  return (
    <div>
    {category &&
       category.map((item: any) => (
     
        <Link  href={`/category-Product/${item}`} className={styles.a2} key={item}>
      {item}
              </Link>
            
      )
       )}  
    
      
      
    </div>
  );
}
