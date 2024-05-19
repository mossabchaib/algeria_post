import React from 'react'
import style from './style.module.css'
import Link from 'next/link';
import { useState } from 'react';
export default function add_Category() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <button className={style.submit1} onClick={toggleSidebar}>+ add category</button>
    <div className={`${isOpen ? style.ul2 : style.ul2none}`}>
    <form className={style.form}>
    <span onClick={toggleSidebar}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></span>
 <p className={style.form_title}>Creete new category</p>
  <div className={style.input_container}>
 <input className={style.description} placeholder="Enter new category" type="text"/>
  </div>
  <Link href='Admin_page/add_product'>
   <button className={style.submit} type="submit" >
Creete
</button>
</Link>
</form>
</div>
</>
  )
}
