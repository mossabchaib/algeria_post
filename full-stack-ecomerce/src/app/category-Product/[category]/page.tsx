import React from 'react'
import Category from './Category';
import CategoryChoice from './CategoryChoice';
export async function GetProduct() {
    const res = await fetch('https://fakestoreapi.com/products' );
    const data=  res.json();
    return data
  }
  export default async function page() {
    const data:any=await GetProduct()
  return (
    <div>
      <Category data={data}/>
      <CategoryChoice data={data}/>
    </div>
  )
}
