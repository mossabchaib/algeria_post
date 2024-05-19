
import { Suspense } from 'react'
import Input from '../../components/Input'
import { Store } from '@/Golobal-Redux/Store';
import { setStartupPokemon } from '@/Golobal-Redux/searshSlice/searsh';
import Provider  from "../../components/Provider";
import Loading from '../product/Loading'
import Preloader from '@/components/Preloader';
export async function GetProduct() {
  const res = await fetch('https://fakestoreapi.com/products' );
  const data=  res.json();
  return data
}
export default async function page() {
  const req = await fetch("http://localhost:3000/api/searsh");
  const dataa = await req.json();
  Store.dispatch(setStartupPokemon(dataa));
    const data:any=await GetProduct()
  return (
    <div>
       <Preloader pokemons={data} />
       <Provider>
      <Suspense fallback={<Loading/>}>
    <Input/>
     </Suspense>
     </Provider>
    </div>
  )
}
