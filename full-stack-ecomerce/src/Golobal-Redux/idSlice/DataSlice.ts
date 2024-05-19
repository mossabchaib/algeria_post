import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from '../Store'

  
  interface NoteState {
    id:string;
  price:string;
title:string;
description:string;
image:string;
category:string;
  }
  
  const initialState: NoteState = {
    id: '',
    price:'',
    description:'',
    title: '',
  image: '',
  category:''
  }

export const AddToid = createSlice({
  name: 'AddToid',
  initialState,
  reducers: {
    addId: (state, action: PayloadAction<NoteState>) => {
     
    state.id=action.payload.id;
    state.title=action.payload.title;
    state.image=action.payload.image;
    state.price=action.payload.price;
    state.description=action.payload.description;
    state.category=action.payload.category;
      },

  },
  })

// Action creators are generated for each case reducer function
export const {addId} = AddToid.actions

export const selectCart = (state: RootState) => state.id
export default AddToid.reducer