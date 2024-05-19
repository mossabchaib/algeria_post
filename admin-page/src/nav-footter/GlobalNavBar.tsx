import React from 'react'
import Navbar from './NavBar';
export async function GetProduct() {
    const res = await fetch('https://fakestoreapi.com/products' );
    const data=  res.json();
    return data
  }
  export default async function GlobalNavBar() {  
    const data:any=await GetProduct()
  return (
    <div>
      <Navbar data={data}/>
    </div>
  )
}
