'use client'
import React, { useEffect, useState } from 'react';
import Imag from './Imag'; // Assuming this is the component for displaying product images
import { useAppDispatch, useAppSelector } from '../../../Golobal-Redux/hooks';
import Link from 'next/link';
import type { RootState } from '../../../Golobal-Redux/Store';
import style from './style.module.css'

import Modal from './Modal'
import ShoppingCartIcon from './ShoppingCartIcon'
import styles from '../../../nav-footter/CartSid.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { openSid } from 'src/Golobal-Redux/searshSlice/wrteSlice';
const CartPage = () => {
 
    const [isOpen, setIsOpen] = useState(false);
    const mode=useAppSelector((md:RootState)=>md.write.modeSide)
const dispatch=useAppDispatch();
    useEffect(()=>{ 
     setIsOpen(mode)
    },[mode])
    const toggleSidebar = () => {
      // isOpen==false? dispatch(openSid(false)):dispatch(openSid(true))
      setIsOpen(!isOpen);
   
    
    };
    const state :any = useAppSelector((state: RootState) => state.Buy.notes);
  const stat :any = useAppSelector((state: RootState) => state.Buy);
  const price=stat.notes.reduce((acc:number,product:any)=>{
  acc+=product.id.price
  return acc
},0)
  return (
  <>
    <div>
    <button  onClick={toggleSidebar} id='cart' type="button" style={{zIndex:'5'}} className=" bg-none text-light btn btn-black position-relative">
    <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
    <circle cx="25" cy="27" r="2" />
    <circle cx="12" cy="27" r="2" />
</svg>
  <span className="position-absolute bg-white top-0 start-100 translate-middle badge rounded-pill ">
  <span style={{color:'black'}}>{state.length}</span>
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</div>
   <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.ps}>   
      <h4 style={{fontSize:'25px',marginLeft:'30px',marginBottom:'30px'}}>my cart</h4>
 {!stat.notes || stat.notes.length === 0 ? (
  <div className={`${style.emptyCartContainer}`}>
  <div className={`${style.shoppingCartIcon}`} >
  <ShoppingCartIcon/>
  </div>
  <p className={`${style.emptyCartText}`}>Your cart is empty. <Link onClick={toggleSidebar} style={{ textDecoration: 'underline',color:'blue',}} href='/product'>Shoping Now</Link></p>
</div>):(
      <div >
     <Modal/>
      </div>
)
}

</div>

</div>
  </>
    
  );
};

export default CartPage;
