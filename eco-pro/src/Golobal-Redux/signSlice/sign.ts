import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
   email:string;
password:string;
  }
  
  const initialState: NoteState = {
    email:'',
    password: '',
  }

export const Sign = createSlice({
  name: 'Sign',
  initialState,
  reducers: {
    addcontact: (state, action: PayloadAction<NoteState>) => {
   state.email=action.payload.email;
    state.password=action.payload.password;
      },

  },
  })

// Action creators are generated for each case reducer function
export const {addcontact} = Sign.actions

export const selectCart = (state: RootState) => state.mode
export default Sign.reducer