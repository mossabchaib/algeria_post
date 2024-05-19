'use client'
import style from './style.module.css'
import React from 'react'
import { useAppDispatch } from 'src/Golobal-Redux/hooks';
import { removeAll } from 'src/Golobal-Redux/buySlice/buy';
export default function onclck(product:any) {
    const dispatch = useAppDispatch();

    const removeAllItems = () => {
        dispatch(removeAll());
      };
  return (
    
        <div >
        <button className={style.clearbtn} type="button" onClick={removeAllItems}>
          Clear
        </button>
   </div>
  )
}
