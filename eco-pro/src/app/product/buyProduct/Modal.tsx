import type { RootState } from '../../../Golobal-Redux/Store'
import {  useAppSelector } from '../../../Golobal-Redux/hooks';
import Delete from './Onclck'
import Link from 'next/link';
import { useAppDispatch } from '@/components/Input';
import { openSid } from '@/Golobal-Redux/searshSlice/wrteSlice';
import Image from './Imag';
import styles from './styles.module.css'; // Import CSS styles
import Plus from './Plus';
import Minse from './Mins';
export default function CartModal() {
    const state :any = useAppSelector((state: RootState) => state.Buy.notes);
    const dispatch=useAppDispatch()
    const modeSideBar=()=>{
      dispatch(openSid(false))
    }
  const stat :any = useAppSelector((state: RootState) => state.Buy);
  const price=stat.notes.reduce((acc:number,product:any)=>{
  acc+=(product.id.price*product.quantite);
  return acc
},0)
    return (
    <>
      <div className={styles.container}>
          <ul className={styles.cart_item_list}>
          <div className={styles.scrollbar_track}>
    <div className={styles.scrollbar_thumb }>
            {stat.notes.map((product:any) => (
              <li key={product.id.id} className={styles.cart_item} >
                 
                <div className={styles.item_details}>
                  <div className={styles.delete_button}>
                  <Delete product={product.id}/>
                  </div>
                  <Link href={`/product/cart/${product.id.id}`} onClick={() => modeSideBar()}>
                    <div className={styles.item_image}>
                      <Image/>
                    </div>
                    <div className={styles.item_info}>
                      <span className={styles.item_title}></span>
                      <p className={styles.item_description}></p>
                    </div>
                  </Link>
                  <div style={{
                    margin:'8px',padding:'5px' }}> <p className={styles.item_description}>{product.id.title.slice(0,20)}</p></div>
                  <div className={styles.item_actions}>

                    <p>{product.id.price}$</p>
                    <div className={styles.item_quantity}>
                 <Plus category={product}/>
                      <p className={styles.quantity_text}>
                        <span className={styles.quantity_text} >{product.quantite}</span>
                      </p>
                   <Minse category={product}/>
                    </div>
                  </div>
                </div>
           
              </li>
            ))}
              </div>
        </div>
             <br />
          </ul>
          <div className={styles.cart_details}>
          
          <hr />
            <div className={styles.pricee}>
              <p>Total price </p>
          <p style={{marginRight:'7px'}}>${price}</p>
            </div>
          </div>
          <Link href="/confarme" className={styles.checkout_button} onClick={() => modeSideBar()}>
            Proceed to Checkout
          </Link>
        </div>
      
    </>
  );
}
