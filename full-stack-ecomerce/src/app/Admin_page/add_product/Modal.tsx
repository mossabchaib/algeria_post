'use client'
import Table from './Table';
import Form from 'react-bootstrap/Form';
import React from 'react'
import style from './style.module.css'
import { useState } from 'react';
import Link from 'next/link';
import Add_Category from './add_Category'
import Button_All_Category from './Button_All_Category';
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title,setTitel]=useState('')
  const [price,setprice]=useState('')
  const [Category,setCategory]=useState('')
  const [description,setdescription]=useState('')
  const [image,setimage]=useState('')

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!title||!price|| !Category || !description || !image) {
alert("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/Log_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title,price ,Category  ,description  ,image}),
      })
      if (res.ok) {
        console.log('hi')
        const form = e.target;
        form.reset();
        alert("creete product secses")
      } else {
        console.log("product failed.");
      }
    }  catch(error){
        console.log(error)
      }}
  return (
    <div >
     <h2 style={{fontSize:'25px'}}>Dashboard</h2>
        <p>Welcome page user</p>
    <div style={{display:'flex'}}>
   
      <button className={style.submit1} onClick={toggleSidebar}>+ add product</button>
     <Add_Category/>
     <Button_All_Category/>
     </div>
  <div >   < Table/> </div>
      <div className={`${isOpen ? style.ul2 : style.ul2none}`}>
         <form className={style.form}>
          <span onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></span>
       <p className={style.form_title}>Creete product</p>
        <div className={style.input_container} >
          <input placeholder="Enter Title" type="text" onChange={(e) => setTitel(e.target.value)}/>  
          <input placeholder="Enter price" type="text" onChange={(e) => setprice(e.target.value)}/>
          <input className={style.description} placeholder="Enter description" type="text" onChange={(e) => setdescription(e.target.value)}/>
          <input placeholder="Enter image  url" type="text" onChange={(e) => setimage(e.target.value)}/>
          <Form.Select aria-label="Default select example" style={{width:'300px'}} onChange={(e) => setCategory(e.target.value)}>
      <option>chose your category product</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

        </div>
        <Link href='Admin_page/add_product'>
         <button className={style.submit} type="submit" onClick={toggleSidebar}>
    Creete
      </button>
      </Link>
   </form>
   </div>
 
    </div>
  )
}

  
