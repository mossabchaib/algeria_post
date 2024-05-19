// components/MenuPage.js
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import { useAppDispatch } from '@/Golobal-Redux/hooks';
import {nav} from '../Golobal-Redux/navStyle/nsv'
const MenuPage = ({ closeMenu }:any) => {
  const dispatch=useAppDispatch()
  const mode=()=>{
    closeMenu();
    const n:any=0
dispatch(nav(n))
  }
  return (
    <div className={styles.menuPage}>
      <button className={styles.closeButton} onClick={mode}>
        X
      </button>
      <Link href="/product">
        
        <span className={styles.Products} onClick={mode}>Products</span>
      </Link>
      <Link href="/">
       
       <NavDropdown className={styles.Products}  title="category" id="basic-nav-category" >
        
             <NavDropdown.Item  href="#action/3.1"><span style={{color:'black'}}>Men</span> </NavDropdown.Item>
             <NavDropdown.Item  href="#action/3.2">
             <span style={{color:'black'}}>Women</span>  
             </NavDropdown.Item>
             <NavDropdown.Item  href="#action/3.3" ><span style={{color:'black'}}>Children</span></NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item  href="#action/3.4">
         <span style={{color:'black'}}>Old people</span>
             </NavDropdown.Item>
           </NavDropdown>
       
       </Link>
      <Link href="/product/buyProduct">
        <span className={styles.Cart} onClick={mode}>Cart</span>
      </Link>
      <Link href="/Signe">
        <span className={styles.Sign} onClick={mode}>Sign In</span>
      </Link>
    </div>
  );
};

export default MenuPage;
