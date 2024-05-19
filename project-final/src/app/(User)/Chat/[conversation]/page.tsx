import React from 'react'
import Header from './component/header'
import Chat from './component/Chat'
import Inpout from './component/input'
export default function page() {
  return (
    <div style={{width:"100%",padding:"20px",height:"650px",background:"#fff",borderRadius:"10px",marginTop:"10px",marginRight:"10px"}}>
 
      <Header/>
      <hr />
         <Chat/>
         
         <Inpout/>
    </div>
  )
}
