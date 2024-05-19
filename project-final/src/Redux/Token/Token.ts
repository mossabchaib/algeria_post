import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    Token:String;
  }
  const initialState: NoteState = {
    Token: '',
  }

export const Token = createSlice({
  name: 'Token',
  initialState,
  reducers: {
    Token_user: (state, action: PayloadAction<any>) => {
    state.Token=action.payload;
         },
  },
  })

export const {Token_user} = Token.actions

export const selectCart = (state: RootState) => state.Token
export default Token.reducer