import "../../globals.css"
import { Inter as FontSans, Outfit } from "next/font/google"
import Sid_Bar from '../../../components/Sid_Bar/Sid_Bar'
import Sid_Bar_Tab from '../../../components/Sid_Bar/Sidbar__phone'
import User from './Component/Header'
import style from './Component/Styles/Style.module.css'
import { cn } from "@/lib/utils"
const inter = Outfit({ subsets: ['latin'] })
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
   className={style.body}
      >
        <div className= {` rounded-lg   text-left text-sm ${inter.className} `} style={{display:"flex"}} >
          <div className={style.sid}>
  <Sid_Bar/>
  </div>
  <User/>
  {children}
  </div>
  <div className={style.Tab}>
  <Sid_Bar_Tab/>
  </div>
      </body>
    </html>
  )
}
