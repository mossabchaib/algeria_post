import { Suspense } from 'react'
import Loading from './product/Loading'
import ImageDescreption from './ImageDescreption'
import CategoryPopulaire from './CategoryPopulaire';
import Carousel from './carousel/Carousel'
export async function GetProduct() {
  const res = await fetch('https://fakestoreapi.com/products' );
  const data=  res.json();
  return data
}
export default async function Home() {  
  const data:any=await GetProduct()
  return (
 

    <main>
       <Suspense fallback={<Loading/>}>
     <ImageDescreption data={data}/>
     <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}>marke popilaire</h3>
    <Carousel data={data}/>
    
     <hr />
     <h3 style={{paddingLeft:'40%',margin:'25px',textDecoration:' underline'}}> popilaire</h3>
     <CategoryPopulaire data={data}/>
     </Suspense>
    </main>

  )
}
// <Carousel data={data}/>