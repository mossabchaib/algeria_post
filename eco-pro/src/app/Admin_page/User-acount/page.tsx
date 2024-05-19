
import React from 'react'
import Modal from './Modal'
export async function GetProduct() {
//   const res = await fetch('http://localhost:3000/api/hello' ,{
//   method:"GET",
//   headers: {
//     "Content-Type": "application/json",
//   },

// }})
//   );
//   const data=  res.json();
//   return data
}
export default async function page() {
 // const data=await GetProduct();
  
  return (
    <div style={{margin:'10px 30px'}}>
    <Modal />
    </div>
  )
}
