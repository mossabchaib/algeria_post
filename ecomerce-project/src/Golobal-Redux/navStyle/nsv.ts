import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    mode:any;
  }
  const initialState: NoteState = {
   mode: 0,
  }

export const navS = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    nav: (state, action: PayloadAction<any>) => {
    state.mode=action.payload;
   
      },

  },
  })

// Action creators are generated for each case reducer function
export const {nav} = navS.actions

export const selectCart = (state: RootState) => state.mode
export default navS.reducer