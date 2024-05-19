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
import { MdDelete } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
export default function Example() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds

  const startProgress = () => {
    setShowProgress(true);
    const startTime = Date.now();
    const endTime = startTime + 60000; // 1 minute in milliseconds

    const updateProgress = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const percentage = Math.min((elapsedTime / 60000) * 100, 100); // Calculate progress percentage
      setProgress(percentage);

      const remainingTime = Math.max(Math.ceil((endTime - now) / 1000), 0);
      setTimeLeft(remainingTime);

      if (now < endTime) {
        requestAnimationFrame(updateProgress); // Continue updating progress until endTime is reached
      } else {
        setShowProgress(false);
        setProgress(0); // Reset progress
        setTimeLeft(60); // Reset time left
      }
    };

    updateProgress();
  };

 const startRecording = () => {
  console.log("jjjj")
  setIsRecording(true);
  // Create a new SpeechRecognition instance and configure it
  recognitionRef.current = new window.webkitSpeechRecognition();
  recognitionRef.current.continuous = true;
  recognitionRef.current.interimResults = true;

  // Event handler for speech recognition results
  recognitionRef.current.onresult = (event: any) => {
    const { transcript } = event.results[event.results.length - 1][0];

    // Log the recognition results and update the transcript state
    console.log(event.results);
    setTranscript(transcript);
  };

  // Start the speech recognition
  recognitionRef.current.start();
};
  function handleOnEnter(text:any) {
    // Limite la longueur du texte à 200 caractères
    const limitedText = text.substring(0, 60);
    console.log("enter", limitedText, image);
    setText("");
    setImage(null);
  }
  useEffect(() => {
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);
  const stopRecording = () => {
    console.log("ssssssss");
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

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
borderRadius:"30px",
marginTop:"14px"
      }}
    >
 {isRecording?<MdDelete  size={40} className="c-blue" color="#000"  onClick={ stopRecording}/>
 :
 <div></div>}
     {!isRecording? <label htmlFor="fileInput">
        <FaImage style={{ cursor: "pointer",fontSize:"20px",color:"black" }} />
      </label>
      :<div></div>}
 {!isRecording?  <input
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
      :<div></div>}
      {!isRecording?  <InputEmoji
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

      />:
       showProgress && 
        <div style={{display:"flex"}}>
                   <div style={{ width: '100%', backgroundColor: '#f6f6f6', height: '20px' }}>
            <div style={{ width: `${progress}%`, backgroundColor: '#4caf50', height: '100%' }}></div>
          </div>
          <p> {timeLeft} </p>
        </div>
      }
      {!isRecording?   <button
        style={{ height: "30px" ,marginRight:"8px"}}
        onClick={startRecording }
      >
        <MdKeyboardVoice style={{fontSize:"25px"}} />
      </button>:<div></div>}
      {!isRecording?  <button
        style={{ height: "30px", width: "45px" ,background:"blue",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px"}}
        onClick={() => handleOnEnter(text)}
      >
        <FaPaperPlane style={{color:"#fff",fontSize:"15px"}}/>
      </button>:
      <button
      style={{ height: "30px", width: "45px" ,background:"blue",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"30px"}}
      onClick={ stopRecording}
    >
      <FaPaperPlane style={{color:"#fff",fontSize:"15px"}}/>
    </button>}
    </div>
  );
}