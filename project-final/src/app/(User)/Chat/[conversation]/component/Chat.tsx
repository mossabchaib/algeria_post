'use client'
import style from '../../Component/Styles/conversation.module.css'
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import React, {  useState } from 'react'
import styles from '../../Component/Styles/Chat.module.css'
export default function chat ({message}:any) {
    const [password, setPassword] = useState('');
       const [chat, setChat] = useState<any>([
        { id: 1, user: 2, message: "Hey, how's it going?", width: 150 ,type:"message"},
        { id: 2, user: 1, message: "I'm good, thanks! How about you?", width: 180 ,type:"message"},
        { id: 3, user: 2, message: "I'm doing well too, just catching up on some work.", width: 190 ,type:"message"},
        { id: 4, user: 1, message: "Sounds productive! Anything exciting happening?", width: 170 ,type:"message"},
        { id: 5, user: 2, message: "Not really, just the usual.", width: 130 ,type:"message"},
        { id: 6, user: 1, message: "That's alright, sometimes routine is good.", width: 180 ,type:"message"},
        { id: 7, user: 2, message: "Yeah, that's true.", width: 100 ,type:"message"},
        { id: 8, user: 1, message: "Anyway, let me know if you need help with anything.", width: 190 ,type:"message"},
        { id: 9, user: 2, message: "Sure, thanks for offering!", width: 180 ,type:"message"},
        { id: 10, user: 1, message: "No problem!", width: 100 ,type:"message"},
        { id: 11, user: 2, message: "So, how was your weekend?", width: 180 ,type:"message"},
        { id: 12, user: 1, message: "It was relaxing. I spent some time with family.", width: 200 ,type:"message"},
        { id: 13, user: 2, message: "That sounds nice. Quality time with family is always important.", width: 200 ,type:"message"},
        { id: 14, user: 1, message: "Definitely. How about you? Did you do anything fun?", width: 200 ,type:"message"},
        { id: 15, user: 2, message: "I went for a hike with friends. It was a great time!", width: 190 ,type:"message"},
        { id: 16, user: 1, message: "That sounds like fun! I should join you next time.", width: 200 ,type:"message"},
        { id: 17, user: 2, message: "Sure, we'd love to have you!", width: 150 ,type:"message"},
        { id: 18, user: 1, message: "Awesome, looking forward to it!", width: 200 ,type:"message"},
        { id: 19, user: 2, message: "Me too!", width: 80 ,type:"message"},
        { id: 20, user: 1, message: "Alright, catch you later!", width: 190 ,type:"message"}
       ]);
    //   const scrollViewRef = useRef<ScrollView>(null);
    //   useEffect(() => {
    //     if (scrollViewRef.current) {
    //         scrollViewRef.current.scrollToEnd({ animated: true });
    //     }
    // }, [message]);
//   React.useEffect(() => {
//     const width:number=parseInt(message[1]);
//     if (message[2]) {
//         setChat((prevChat:any) => [
//             ...prevChat,
//             { id: prevChat.length + 1, user: 2, message: message,width:width }
//         ]);
//     }
// }, [message]);
 return (

  <ScrollArea className={style.big_container_chat} style={{height:'480px',marginBottom:"0px"}}>
   {
     chat.map((items:any)=>(
      <div className={items.user == 1 ?styles.userSend:styles.userreceve} style={{display:"flex",alignItems:"end",gap:"4px"}}>
            {items.user == 1?
        <div className={style.imgUser} style={{width:"25px",height:"25px",backgroundColor:"#f6f6f6"}}>
        <p className={style.nameUser} style={{fontSize:"9px"}}>MC</p>
       </div>:null
    }
       <div key={items.id} 
       style={{width:items.width+23}}
       className={items.user == 1 ? styles.containeruser1: styles.container2} >
                     <p 
                 style={{width:items.width}}
                 className={items.user == 1 ? styles.chat : styles.chat2} >
           {items.message }</p>
       </div>
       </div>
     
     ))
   }
       
       </ScrollArea>
)
 
}
