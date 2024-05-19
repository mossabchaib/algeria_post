import { Pokemon } from "../Golobal-Redux/searshSlice/types";
import Link from "next/link";
import { useAppSelector,useAppDispatch } from "./Input";
import { addId } from "@/Golobal-Redux/idSlice/DataSlice";
import { RootState } from "@/Golobal-Redux/Store";
import Image from "../app/product/cart/Image";
import StyleP from '../app/product/cart/StyleP.module.css'
const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const dispatch=useAppDispatch()
  const sendId=(id:any)=>{
    dispatch(addId(id))
      }
      const mode:any=useAppSelector((mode:RootState)=> mode.write)
  return (
    <div className={StyleP.containar}>
    
{
  pokemons.length===0 && mode.mode==='true' ? <div><h1 style={{paddingLeft:'20%',marginTop:'100px',fontSize:'50px'}}>not found</h1></div> :
    <div className={StyleP.cart} >
    {
   pokemons.map((data:any)=>{
      return (
          <div className={StyleP.item} key={data.id} >
          <Link href={`/product/cart/${data.id}`}>
              <div onClick={()=>sendId(data)}>
                <div className={StyleP.im}> 
                  <Image idimage={data.image}/>
                </div>
       
          </div>
           </Link>
           <div className={StyleP.information}>
               <h3 style={{fontSize:'15px'}}>{data.title.slice(0,15)}</h3>
               <p className={StyleP.p}>{data.price} usd</p>
               </div>
           </div>
          
    )})}
</div>}
</div>
  );
};

export default PokemonTable;