// 'use client'
// import { Button } from '@/components/ui/button'
// import { Switch } from '@/registry/default/ui/switch'
// import { Textarea } from '@/registry/default/ui/textarea'
// import { Label } from '@radix-ui/react-label'
// import React, { useState } from 'react'

// export default function input() {
//   const[message,setmessage]=useState('');
//   const Send_Message=()=>{
// try {
//   // axios.put(message);
// } catch (error) {
//   // aleart(error);
// }
// setmessage('');
//   }
//   return (
//     <form>
//     <div className="grid gap-4">
//       <Textarea
//         className="p-4"
//         placeholder={`send message`}
//         onChange={(message:any)=>setmessage(message.target.value)}
//         value={message}
//       />
//       <div className="flex items-center">
//       {message? <div  onClick={Send_Message}> Send</div>
//       :
//       <div>hi</div>
//       }
         
        
//       </div>
//     </div>
//   </form>
//   )
// }
"use client";
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
export default function Example() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  function handleOnEnter(text:any) {
    // Limite la longueur du texte à 200 caractères
    const limitedText = text.substring(0, 60);
    console.log("enter", limitedText, image);
    setText("");
    setImage(null);
  }

  function handleImageChange(event:any) {
    const file = event.target.files[0];
    setImage(file);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        background:"#f6f6f6",
paddingLeft:"9px",
paddingRight:"9px",
borderRadius:"30px"
      }}
    >
      <label htmlFor="fileInput">
        <FaImage style={{ cursor: "pointer",fontSize:"20px",color:"black" }} />
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{
         display:"none",
          fontSize: "100px",
          height: "100px",
          width: "300px",
        }}
        onChange={handleImageChange}
      />
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="message ..."
        maxLength={200} 
        background="#f6f6f6"
        borderColor="#f6f6f6"
        placeholderColor="#000"
        shouldConvertEmojiToImage={true}
        shouldReturn={true}

      />
        <button
        style={{ height: "30px", width: "45px" }}
        onClick={() => handleOnEnter(text)}
      >
        <MdKeyboardVoice style={{fontSize:"25px"}}/>
      </button>
      <button
        style={{ height: "30px", width: "45px" ,background:"blue",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px"}}
        onClick={() => handleOnEnter(text)}
      >
        <FaPaperPlane style={{color:"#fff",fontSize:"15px"}}/>
      </button>
    </div>
  );
}