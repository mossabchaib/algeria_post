'use client'
import { ComponentProps, useState } from "react"
import style from './Styles/message.module.css'
import { ScrollArea } from "@/registry/default/ui/scroll-area"
import Add from './Action'
import Link from "next/link"

export default function MailList() {
  const[action,setaction]=useState(false);
  const [mail, setMail] = useState<any[]>([
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
        labels: ["meeting", "work", "important"],
        type:"important", 
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "110e8400-e29b-11d4-a716-446655440000",
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
        date: "2023-10-22T10:30:00",
        read: true,
        labels: ["work", "important"],
        type:"work"  ,
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
      },
      {
        id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
        date: "2023-04-10T11:45:00",
        read: true,
        labels: ["personal"],
        type:"important",  
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "61c35085-72d7-42b4-8d62-738f700d4b92",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Re: Question about Budget",
        text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
        date: "2023-03-25T13:15:00",
        read: false,
        labels: ["work", "budget"],
        type:""  ,
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
        name: "Michael Wilson",
        email: "michaelwilson@example.com",
        subject: "Important Announcement",
        text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
        date: "2023-03-10T15:00:00",
        read: false,
        labels: ["meeting", "work", "important"],
        type:"important",  
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
        name: "Sarah Brown",
        email: "sarahbrown@example.com",
        subject: "Re: Feedback on Proposal",
        text: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
        date: "2023-02-15T16:30:00",
        read: true,
        labels: ["work"],
        type:"important",  
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
        name: "David Lee",
        email: "davidlee@example.com",
        subject: "New Project Idea",
        text: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
        date: "2023-01-28T17:45:00",
        read: false,
        labels: ["meeting", "work", "important"],
        type:"work"  ,
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
        name: "Olivia Wilson",
        email: "oliviawilson@example.com",
        subject: "Vacation Plans",
        text: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
        date: "2022-12-20T18:30:00",
        read: true,
        labels: ["personal"],
        type:"important",  
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png",
      },
      {
        id: "de305d54-75b4-431b-adb2-eb6b9e546014",
        name: "James Martin",
        email: "jamesmartin@example.com",
        subject: "Re: Conference Registration",
        text: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
        date: "2022-11-30T19:15:00",
        read: true,
        labels: ["work", "conference"],
        uri_platform:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"  
    },
  ])
const [category,setcategory]=useState<any>()
const handaltype=(index:number,type:String)=>{
    mail[index].type=type;
}
const handelAction =()=>{
setaction(!action);
console.log("action:",action);
}
  return (
    <ScrollArea   className={style.big}  >
    {
        mail.map((items:any,index:number)=>
        <div 
        className="items-start gap-2 rounded-lg  p-3 text-left text-sm transition-all hover:bg-accent m-1" style={{position:"relative"}}
            onMouseEnter={handelAction}
      onMouseLeave={handelAction}>
          <Link href='/Chat/123'>
        <div className={style.headerMessage}>  
            <div className={style.infoUser}>
           <div className={style.imgUser} >
            <p className={style.nameUser}>{items.name[0]}C</p>
            <img src={items.uri_platform} alt="" className={style.imgplatform} />
           </div>
            <p className={style.nameUser}>{items.name}</p>
        </div>
        <p className={style.timemessage}>{items.date.slice(0,10)}</p>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <p className="line-clamp-2 text-xs text-muted-foreground mt-3 mr-5">{items.text}</p>
        <div style={{padding:"5px",borderRadius:"50%",background:"blue"}}></div>
        </div>
        <div className={action?style.Actionshow:style.Actionhiden} style={{position:"absolute",left:"270px",top:"60px"}}>
        <Add/>
        </div>
        </Link>
        </div>
        )
    }
 </ScrollArea>
  )
}

