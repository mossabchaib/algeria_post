'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from './navMobil.module.css';
import StyleB from './styleButton.module.css'
import { usePathname } from 'next/navigation';
import Menu from './menu'

const Sidebar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

const toggleSidebarMenu = () => {
  setIsOpenMenu(!isOpenMenu);
};
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };
  const path=usePathname();
  return (
    <div>
        <label className={StyleB.container}>
  <input type="checkbox" onClick={toggleSidebar}/>
  <div className={StyleB.checkmark}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</label>  
      
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
    <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={`${styles.a } ${path=='/product'?styles.satr:''}`} href="/product"  onClick={toggleSidebar}>Products</Link>
        </li>
        <li className={styles.li}>
          <div className={`${styles.a } ${path=='/'?styles.satr:''}`}  onClick={toggleSidebarMenu } >Category
          {isOpenMenu ? <svg width="30px" height="30px" color='#fff' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" transform="rotate(90)">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> 
  <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
  </g></svg> :<svg width="30px" height="30px" color='#fff' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff" >
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier"> 
  <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
  </g></svg>}
 <ul  className={`${isOpenMenu ? styles.ul2 : styles.ul2none}`}>
  <div  onClick={toggleSidebar}> <Menu /></div>
   
       </ul>
          </div>
        </li>
        <li className={styles.li}>
          <Link className={`${styles.a } ${path=='/Login'?styles.satr:''}`} href="/Login"  onClick={toggleSidebar}>Login</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
