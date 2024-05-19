// 'use client'
// import React, { useEffect, useState, useRef } from "react";
import style from '../Chat/Component/Styles/Style.module.css'
// declare global {
//   interface Window {
//     MediaRecorder: any;
//   }
// }

// export default function MicrophoneComponent() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingComplete, setRecordingComplete] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [audioURL, setAudioURL] = useState("");
//   const [remainingTime, setRemainingTime] = useState(60); // الوقت المتبقي بالثواني

//   const recognitionRef = useRef<any>(null);
//   const mediaRecorderRef = useRef<any>(null);

//   useEffect(() => {
//     let interval: any;

//     if (isRecording) {
//       interval = setInterval(() => {
//         setRemainingTime((prevTime) => {
//           if (prevTime === 0) {
//             stopRecording();
//             return 60; // إعادة الوقت إلى 60 ثانية بعد التوقف
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRecording]);

//   const startRecording = () => {
//     setIsRecording(true);
//     setTranscript("");
//     setAudioURL("");
//     setRemainingTime(60); // إعادة الوقت إلى 60 ثانية

//     recognitionRef.current = new window.webkitSpeechRecognition();
//     recognitionRef.current.continuous = true;
//     recognitionRef.current.interimResults = true;

//     recognitionRef.current.onresult = (event: any) => {
//       const { transcript } = event.results[event.results.length - 1][0];
//       setTranscript(transcript);
//     };

//     recognitionRef.current.start();

//     const stream = new MediaStream();
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       mediaRecorderRef.current = new MediaRecorder(stream);
//       const chunks: any[] = [];

//       mediaRecorderRef.current.ondataavailable = (e: any) => {
//         chunks.push(e.data);
//       };

//       mediaRecorderRef.current.onstop = () => {
//         const blob = new Blob(chunks, { type: "audio/mp3" });
//         const audioURL = URL.createObjectURL(blob);
//         setAudioURL(audioURL);
//       };

//       mediaRecorderRef.current.start();
//     });
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     setRecordingComplete(true);
//     recognitionRef.current.stop();
//     mediaRecorderRef.current.stop();
//   };

//   const handleToggleRecording = () => {
//     if (!isRecording) {
//       startRecording();
//     } else {
//       stopRecording();
//     }
//   };

//   const handleSendAudio = () => {
//     // إرسال الصوت هنا
//   };

//   return (
//     <div className={style.Page}>
//     <div className="flex items-center justify-center h-screen w-full">
//       <div className="w-full">
//         {isRecording && (
//           <div>
//             <p>Recording...</p>
//             <div>Remaining Time: {remainingTime} seconds</div>
//           </div>
//         )}
//         {recordingComplete && (
//           <div>
//             <audio controls src={audioURL} />
//             <p>{transcript}</p>
//             <button onClick={handleSendAudio}>Send Audio</button>
//           </div>
//         )}

//         <button onClick={handleToggleRecording} style={{ backgroundColor: isRecording ? 'red' : 'blue', color: 'white' }}>
//           {isRecording ? "Stop Recording" : "Start Recording"}
//         </button>
//         {isRecording && <div className="progress-bar" style={{ width: `${(60 - remainingTime) * (100 / 60)}%` }}></div>}
//       </div>
//     </div>
//     </div>
//   );
// }
import React from 'react'
import { IoChatbubblesSharp } from "react-icons/io5";
export default function page() {
  return (
    <div className={style.Page} >
      <IoChatbubblesSharp size={120}/>
    </div>
  )
}
