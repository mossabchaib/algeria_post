//import { getCart } from '../../lib/shopify';
import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
 
  return <CartModal  />;
}
