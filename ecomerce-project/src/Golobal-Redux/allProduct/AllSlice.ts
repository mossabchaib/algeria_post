
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface Note {
  id:string;
  price:string;
title:string;
description:string;
image:string;
  }
  
  interface NoteState {
    notes: Array<Note>
  }
  
  const initialState: NoteState = {
    notes: [
      
    ]
  }

export const modeSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
  pushAll:(state:any,actions:PayloadAction<any>)=>{
   state.notes.push(actions.payload)
  }
 },
  })
export const {pushAll} = modeSlice.actions

export const selectCart = (state: RootState) => state.all
export default modeSlice.reducer