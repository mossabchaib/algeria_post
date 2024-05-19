'use client'
import Image from 'next/image'
import Logo from '../../../public/image/Logo.jpg' 


export default function Fill(idimage:any) {
 
    return (
      <div
        style={{
          display: 'grid',
          gridGap: '8px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(50px, auto))',
        }}
      >
        {      
       <div style={{ position: 'relative', height: '50px' }}>
          <Image
            alt="Mountains"
            src={Logo}
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