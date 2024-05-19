import { configureStore } from '@reduxjs/toolkit'
import idReducer from './idSlice/DataSlice'
import allReducer from './allProduct/AllSlice'
import BuyReducer from './buySlice/buy'
import searshReducer from './searshSlice/searsh'
import nvReducer from './navStyle/nsv'
import loginReducer from './loginSlice/login'
import SignReducer from './signSlice/sign'
import SearshReducer from './searshSlice/searsh'
import modeSlice from './mode side-bar/SidSlice'
import { pokemonApi } from "./searshSlice/pokimonApi";
import writSlice from './searshSlice/wrteSlice'
import checkReducer from './Category/categorySice'
export const Store = configureStore({
  reducer: {
    check:checkReducer,
    write:writSlice,
    pokemonApi:pokemonApi.reducer,
    sign:SignReducer,
    login:loginReducer,
    nv:nvReducer,
    searsh:searshReducer,
    Buy:BuyReducer,
    all:allReducer,
    id:idReducer,
mode:modeSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
})

export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch