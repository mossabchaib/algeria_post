import Card from './uiCart/Card';
import Ecomerce from '../../../public/image/81fPKd-2AYL._AC_SL1500_.jpg'

import ProductGridItems from '../../components/layout/product-grid-items';
import Grid from '../../components/grid';
import { GridTileImage } from '../../components/grid/tile';
import { Product } from '../../lib/shopify/types';
import Link from 'next/link';
export const runtime = 'edge';
export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};
export async function GetProduct() {
  const res = await fetch('https://fakestoreapi.com/products' );
  const data=  res.json();
  return data
}
export default async function SearchPage() {
  
  const products:any=await GetProduct()

  return (
    <>
      
     
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product:any) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.id}`}>
            <GridTileImage
              alt={product.title.slice(0,10)}
              label={{
                title: product.title.slice(0,20),
                amount: product.price,
                currencyCode: product.price
              }}
              src={Ecomerce}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
        </Grid>
  
    </>
  );
}
