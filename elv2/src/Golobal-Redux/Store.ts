import { configureStore } from '@reduxjs/toolkit'
import modeSliceReducer from './mode side-bar/SidSlice'
import idReducer from './idSlice/DataSlice'
import allReducer from './allProduct/AllSlice'
import BuyReducer from './buySlice/buy'
import searshReducer from './searshSlice/searsh'
import nvReducer from './navStyle/nsv'
import loginReducer from './loginSlice/login'
import SignReducer from './signSlice/sign'
import SearshReducer from './searshSlice/searsh'
import { pokemonApi } from "./searshSlice/pokimonApi";
export const Store = configureStore({
  reducer: {
    pokemonApi:pokemonApi.reducer,
    sign:SignReducer,
    login:loginReducer,
    nv:nvReducer,
    searsh:searshReducer,
    Buy:BuyReducer,
    all:allReducer,
    id:idReducer,
mode:modeSliceReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
})

export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch