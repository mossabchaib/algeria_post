import Cart from './cart/Cart'
import { Suspense } from 'react'
import Loading from './Loading'
export async function GetProduct() {
  const res = await fetch('https://fakestoreapi.com/products' );
  const data=  res.json();
  return data
}
export default async function page() {
    const data:any=await GetProduct()

  return (
    <div>

      <Suspense fallback={<Loading/>}>
     <Cart data={data}/> 
     </Suspense>

    </div>
  )
}
