'use client'
import React from 'react'
import style from './style.module.css'
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
export default function Ui_Edit() {
  const router=useRouter()
   const handaler=()=>{
     Swal.fire({
        title: "Do you want to delet product?",
        showCancelButton: true,
        confirmButtonText: "Edit",
      }).then((result:any) => {
        if (result.isConfirmed) {
          Swal.fire("Edit!", "", "success");
          router.replace('/Admin_page/add_product')
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      })
   }
  return (
    <form className={style.form}>
 <p className={style.form_title}>Edit product</p>
  <div className={style.input_container}>
    <input placeholder="Enter Title" type="text" className={style.input}style={{marginLeft:'20px'}}/>  
    <input placeholder="Enter price" type="text" className={style.input} style={{marginLeft:'20px'}}/>
    <input placeholder="Enter image  url" type="text" style={{marginLeft:'20px'}} className={style.input}/>
    <input placeholder="Enter image  url" type="text" className={style.input} style={{marginLeft:'20px'}}/>
    <input placeholder="Enter image  url" type="text" className={style.input} style={{marginLeft:'20px'}}/>
    <input placeholder="Enter image  url" type="text" className={style.input} style={{marginLeft:'20px'}}/>
    <Form.Select aria-label="Default select example" style={{width:'300px'}} className={style.input} >
<option>chose your category product</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>
<input className={style.description} placeholder="Enter description" type="text" style={{marginLeft:'20px'}}/>
  </div>
 
   <button className={style.submit} type="button" onClick={handaler}>
Edit
</button>

</form>
  )
}
