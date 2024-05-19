'use client'
import Image from 'next/image'
import Ecomerce from '../../../../public/image/Ecomere.webp' 
import type { RootState } from '../../../Golobal-Redux/Store';
import { useAppSelector } from '@/Golobal-Redux/hooks';
export default function Fill(idimage:any) {
  const nav:any=useAppSelector((stat:RootState)=>stat.nv)
    return (
      <div
        style={{
          display: 'grid',
          gridGap: '8px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, auto))',
        }}
      >
        {      
        nav.mode==1 ? <div></div> :<div style={{ position: 'relative', height: '50px' }}>
          <Image
            alt="Mountains"
            src={Ecomerce}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </div>}
        {/* And more images in the grid... */}
      </div>
    )
  }