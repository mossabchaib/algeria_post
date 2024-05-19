
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledDiv from './Global'
import Navbar from 'src/nav-footter/NavBar'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Confarm shopping',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
 
        <main style={{marginBottom:'20px'}}> <StyledDiv>{children}</StyledDiv></main>
       
        </body>
    </html>
  )
}