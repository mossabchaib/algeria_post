import { configureStore } from '@reduxjs/toolkit'
import Token from './Token/Token'
export const Store = configureStore({
  reducer: {
Token:Token
  },})

export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch