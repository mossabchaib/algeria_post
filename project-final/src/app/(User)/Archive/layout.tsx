import "../../globals.css"
import { Inter as FontSans } from "next/font/google"
import Sid_Bar from '../../../components/Sid_Bar/Sid_Bar'
import Sid_Bar_Tab from '../../../components/Sid_Bar/Sidbar__phone'
import { cn } from "@/lib/utils"
import User from './Component/Header'
import style from '../Chat/Component/Styles/Style.module.css'
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
        className={cn(
          " bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className= {` rounded-lg   text-left text-sm ${style.Layout} `} style={{display:"flex"}}>
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
