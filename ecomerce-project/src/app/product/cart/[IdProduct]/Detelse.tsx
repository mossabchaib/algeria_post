'use client'
import Cart from '../Cart'
import style from './style.module.css'
 import Image from './Image'
import { useAppDispatch,useAppSelector } from 'src/Golobal-Redux/hooks'
import { RootState } from 'src/Golobal-Redux/Store'
import CategoryName from './CategoryName'
import { addNote } from 'src/Golobal-Redux/buySlice/buy'
import Add from './Add'
import { usePathname } from 'next/navigation'
export default function Detelse(data:any) {
  const dispatch=useAppDispatch()
  const path=usePathname()
  const str:any=path[14];
  let num = parseInt(str)  
  const dataNone:any=data.data[num-1];
  const buy=(product:any)=>{
    dispatch(addNote(product))
  }
  let id: any = null;
  const state: any = useAppSelector((state: RootState) => state.id);
 let info_if_no_data:any={ ...dataNone }
  if(state.id == ''){
   id = { ...dataNone }
  }
  else{
    id = { ...state }  
    info_if_no_data={ ...state }  
  }
    const Category=info_if_no_data.category;
  return (
  <div className={style.bigcontainar} >
      <div className={style.container}  key={info_if_no_data.id}>
    <div className={style.productimage} >
     <Image url={info_if_no_data.image}/>
    </div>
    <div className={style.productinfo}>
      <h1 className={style.producttitle} style={{fontSize:'25px'}}>{info_if_no_data.title.slice(0,20)}</h1>
      <h3 className={style.productprice}><span className={style.span}></span >${info_if_no_data.price}</h3>
      <hr />
      <p className={style.productdescription} style={{fontSize:'17px'}}>{info_if_no_data.description}</p>
      <Add id={id}/>
    </div>
  
    </div>
    <div className={style.ourProducts}>
    <h3 style={{margin:'25px',textDecoration:' underline'}}>outher products</h3>
     
      <div>
<CategoryName data={data} Category={Category}/>
      </div>
    </div>
    </div>
  )
}
