
import Ecomerce from './../../public/image/photo_5931353684522941317_y (1).jpg'
import Image from "next/image"
export default function imageDescreption() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Image
      alt="Mountains"
     src={Ecomerce}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    </div>
  )
}
