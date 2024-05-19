
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    mode:string
  }
  
  const initialState: NoteState = {
   mode:''
  }

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
  modeSid:(state:any,actions:PayloadAction<any>)=>{
   state.mode=actions.payload
  }
 },
  })
export const {modeSid} = modeSlice.actions

export const selectCart = (state: RootState) => state.mode
export default modeSlice.reducer