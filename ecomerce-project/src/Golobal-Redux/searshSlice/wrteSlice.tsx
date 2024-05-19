
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    mode:boolean,
    modeSide:boolean
  }
  
  const initialState: NoteState = {
   mode:false,
   modeSide:false,
  }

export const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
  mode:(state:any,actions:PayloadAction<string>)=>{
 state.mode=actions.payload

  },
  openSid:(state:any,actions:PayloadAction<boolean>)=>{
    state.modeSide=actions.payload
     }
 },
  })
export const {mode,openSid} = writeSlice.actions

export const selectCart = (state: RootState) => state.write
export default writeSlice.reducer