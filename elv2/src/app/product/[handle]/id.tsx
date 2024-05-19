import React from 'react'
import { useAppSelector } from '@/Golobal-Redux/hooks'
import { RootState } from '@/Golobal-Redux/Store'
export default function id() {
    const state:any= useAppSelector((state: RootState) => state.id)
    const id:any={...state}
  return (
    <div>
      
    </div>
  )
}
