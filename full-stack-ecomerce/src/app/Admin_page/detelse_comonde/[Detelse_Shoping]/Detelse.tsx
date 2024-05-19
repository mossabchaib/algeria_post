'use client'
import Table_Admin from './Table_Admin'
import style from './style.module.css'
 import Image from './Image'
import { useAppDispatch,useAppSelector } from '@/Golobal-Redux/hooks'
import { RootState } from '@/Golobal-Redux/Store'
import { addNote } from '@/Golobal-Redux/buySlice/buy'
import { usePathname } from 'next/navigation'
export default function Detelse(data:any) {
//   const dispatch=useAppDispatch()
//   const path=usePathname()
//   const str:any=path[14];
//   let num = parseInt(str)  
//   const dataNone:any=data.data[num-1];
//   const buy=(product:any)=>{
//     dispatch(addNote(product))
//   }
//   let id: any = null;
//   const state: any = useAppSelector((state: RootState) => state.id);
//  let info_if_no_data:any={ ...dataNone }
//   if(state.id == ''){
//    id = { ...dataNone }
//   }
//   else{
//     id = { ...state }  
//     info_if_no_data={ ...state }  
//   }
//     const Category=info_if_no_data.category;
  return (
  <div className={style.bigcontainar} >
      <div className={style.container}  >
    <div className={style.productimage} >
     <Image />
    </div>
    <div className={style.productinfo}>
      <h1 className={style.producttitle} style={{fontSize:'25px'}}><span className={style.span}>title:</span >Hodie oversize</h1>
      <h3 className={style.productprice}><span className={style.span}>price:</span >$50</h3>
      <hr />
      <h3 className={style.productprice}><span className={style.span}>size:</span >M</h3>
      <h3 className={style.productprice}><span className={style.span}>Quantite:</span >2</h3>
    </div>
  
    </div>
   <div><Table_Admin/></div>
    </div>
  )
}
