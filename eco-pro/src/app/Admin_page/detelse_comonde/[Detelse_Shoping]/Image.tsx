import Image from 'next/image'
import Ecomerce from '../../../../../public/image/hoodie-1.avif' 
export default function Fill() {
   return (
      <div
        style={{
          display: 'grid',
          gridGap: '8px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, auto))',
      
        }}
      >
        <div style={{ position: 'relative', height: '350px',width:'230px'}}>
          <Image
            alt="Mountains"
            src={Ecomerce}
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
        </div>
        {/* And more images in the grid... */}
      </div>
    )
  }