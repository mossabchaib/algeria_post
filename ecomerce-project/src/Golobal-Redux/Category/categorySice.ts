import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
exist:any;
category:any [];
  }
  
  const initialState: NoteState = {
  category:[],
  exist:null
  }

export const check_categordSlice = createSlice({
  name: 'check_categordSlice',
  initialState,
  reducers: {
    check_category: (state:any, action: PayloadAction<NoteState>) => {
     console.log(action.payload)
        // const existingNote = state.category.find((product:any) => product.category!=action.payload.category);
        // if(existingNote){
        // state.category.push(action.payload.category);
        // state.exist=existingNote;
        // }
      },

  },
  })
  export const {  check_category} = check_categordSlice.actions;
export const selectCart = (state: RootState) => state.Buy.notes;
export default check_categordSlice.reducer;