
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

type Note = {
  id: string;
  title: string;
  image: string;
  quantite: number; // Change the type to number
  price: number;
};

interface NoteState {
  notes: Array<Note>;
}

const initialState: NoteState = {
  notes: [ ],
};
export const AddToCartSlice = createSlice({
  name: "AddToCartSlice",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      console.log(action.payload)
      const existingNote = state.notes.find((product) => product.id.id===action.payload.id.id);
        if (existingNote) {
      existingNote.quantite+=1
      } else {
        const newNote = { ...action.payload, quantite: 1 };
        state.notes.push(newNote); }
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      console.log('id2:',id)
      const notess = state.notes.filter((product) =>product.id.id!=id );
      state.notes=notess},
    removeAll: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, remove, removeAll } = AddToCartSlice.actions;

export const selectCart = (state: RootState) => state.Buy.notes;
export default AddToCartSlice.reducer;
