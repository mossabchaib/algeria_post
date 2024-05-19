import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    first_name:string;
  last_name:string;
email:string;
password:string;
  }
  
  const initialState: NoteState = {
    first_name: '',
    last_name:'',
    email:'',
    password: '',
  }

export const Login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addcontact: (state, action: PayloadAction<NoteState>) => {
    state.first_name=action.payload.first_name;
    state.last_name=action.payload.last_name;
    state.email=action.payload.email;
    state.password=action.payload.password;
      },

  },
  })

// Action creators are generated for each case reducer function
export const {addcontact} = Login.actions

export const selectCart = (state: RootState) => state.mode
export default Login.reducer