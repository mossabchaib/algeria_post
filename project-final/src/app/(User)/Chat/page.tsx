//  'use client'
//  import React, { useEffect, useState, useRef } from "react";

//  declare global {
//    interface Window {
//      MediaRecorder: any;
//    }
//  }

//  export default function MicrophoneComponent() {
//    const [isRecording, setIsRecording] = useState(false);
//    const [recordingComplete, setRecordingComplete] = useState(false);
//    const [transcript, setTranscript] = useState("");
//    const [audioURL, setAudioURL] = useState("");
//    const [remainingTime, setRemainingTime] = useState(60); // الوقت المتبقي بالثواني

//    const recognitionRef = useRef<any>(null);
//    const mediaRecorderRef = useRef<any>(null);

//    useEffect(() => {
//      let interval: any;

//      if (isRecording) {
//        interval = setInterval(() => {
//          setRemainingTime((prevTime) => {
//            if (prevTime === 0) {
//              stopRecording();
//              return 60; // إعادة الوقت إلى 60 ثانية بعد التوقف
//            }
//            return prevTime - 1;
//          });
//        }, 1000);
//      }

//      return () => clearInterval(interval);
//    }, [isRecording]);

//    const startRecording = () => {
//      setIsRecording(true);
//      setTranscript("");
//      setAudioURL("");
//      setRemainingTime(60); // إعادة الوقت إلى 60 ثانية

//      recognitionRef.current = new window.webkitSpeechRecognition();
//      recognitionRef.current.continuous = true;
//      recognitionRef.current.interimResults = true;

//      recognitionRef.current.onresult = (event: any) => {
//        const { transcript } = event.results[event.results.length - 1][0];
//        setTranscript(transcript);
//      };

//      recognitionRef.current.start();

//      const stream = new MediaStream();
//      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//        mediaRecorderRef.current = new MediaRecorder(stream);
//        const chunks: any[] = [];

//        mediaRecorderRef.current.ondataavailable = (e: any) => {
//          chunks.push(e.data);
//        };

//        mediaRecorderRef.current.onstop = () => {
//          const blob = new Blob(chunks, { type: "audio/mp3" });
//          const audioURL = URL.createObjectURL(blob);
//          setAudioURL(audioURL);
//        };

//        mediaRecorderRef.current.start();
//      });
//    };

//    const stopRecording = () => {
//      setIsRecording(false);
//      setRecordingComplete(true);
//      recognitionRef.current.stop();
//      mediaRecorderRef.current.stop();
//    };

//    const handleToggleRecording = () => {
//      if (!isRecording) {
//        startRecording();
//      } else {
//        stopRecording();
//      }
//    };

//    const handleSendAudio = () => {
// //     // إرسال الصوت هنا
//    };

//    return (
//      <div >
//      <div className="flex items-center justify-center h-screen w-full">
//        <div className="w-full">
//          {isRecording && (
//            <div>
//              <p>Recording...</p>
//              <div>Remaining Time: {remainingTime} seconds</div>
//            </div>
//          )}
//          {recordingComplete && (
//            <div>
//              <audio controls src={audioURL} />
//              <p>{transcript}</p>
//              <button onClick={handleSendAudio}>Send Audio</button>
//            </div>
//          )}

//          <button onClick={handleToggleRecording} style={{ backgroundColor: isRecording ? 'red' : 'blue', color: 'white' }}>
//            {isRecording ? "Stop Recording" : "Start Recording"}
//          </button>
//          {isRecording && <div className="progress-bar" style={{ width: `${(60 - remainingTime) * (100 / 60)}%` }}></div>}
//        </div>
//      </div>
//      </div>
//    );
//  }










 import React from 'react'
 import { IoChatbubblesSharp } from "react-icons/io5";
 import style from './Component/Styles/Style.module.css'
 export default function page() {
   return (
   
     <div className={style.Page} >
       <IoChatbubblesSharp size={120}/>
         </div>
   )
 }






// 'use client'
// import { useState } from 'react';

// export default function ProgressPage() {
//   const [showProgress, setShowProgress] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60); // 60 seconds

//   const startProgress = () => {
//     setShowProgress(true);
//     const startTime = Date.now();
//     const endTime = startTime + 60000; // 1 minute in milliseconds

//     const updateProgress = () => {
//       const now = Date.now();
//       const elapsedTime = now - startTime;
//       const percentage = Math.min((elapsedTime / 60000) * 100, 100); // Calculate progress percentage
//       setProgress(percentage);

//       const remainingTime = Math.max(Math.ceil((endTime - now) / 1000), 0);
//       setTimeLeft(remainingTime);

//       if (now < endTime) {
//         requestAnimationFrame(updateProgress); // Continue updating progress until endTime is reached
//       } else {
//         setShowProgress(false);
//         setProgress(0); // Reset progress
//         setTimeLeft(60); // Reset time left
//       }
//     };

//     updateProgress();
//   };

//   return (
//     <div>
//       <h1>Progress Bar Example</h1>
//       <button onClick={startProgress}>Start Progress</button>
//       {showProgress && (
//         <div>
//           <p>Progress: {Math.round(progress)}%</p>
//           <p>Time Left: {timeLeft} seconds</p>
//           <div style={{ width: '100%', backgroundColor: '#ddd', height: '20px' }}>
//             <div style={{ width: `${progress}%`, backgroundColor: '#4caf50', height: '100%' }}></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
