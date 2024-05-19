'use client'
import React from 'react'
import { useAppDispatch } from 'src/Golobal-Redux/hooks';
import { remove } from 'src/Golobal-Redux/buySlice/buy';
import styles from './styles.module.css';
export default function onclck(product:any) {
    const dispatch = useAppDispatch();
  const removeItem = (productId: string) => {
    dispatch(remove(productId));
  };
  return (
    <div>
        <span className={styles.item_title} ><button onClick={() => removeItem(product.product.id)} style={{border:'none',color:'#000'}}>X</button></span>
     
    </div>
  )
}
