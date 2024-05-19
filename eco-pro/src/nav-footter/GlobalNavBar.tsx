import React from 'react'
import Navbar from './NavBar';
import Menu from './menu';
export async function GetProduct() {
    const res = await fetch('https://fakestoreapi.com/products' );
    const data=  res.json();
    return data
  }
  export default async function GlobalNavBar() {  
    const data:any=await GetProduct()
  

  return (
    <div>
         <div style={{display:'none'}}><Menu data={data}/></div>
      <Navbar data={data}/>
   
    </div>
  )
}
