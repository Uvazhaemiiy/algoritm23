import { combineReducers } from '@reduxjs/toolkit'
import { sidebarReducer } from './sidebarReducer'
import postsReducer from './posts.reducer'

export const rootReducer = combineReducers({
   sidebar: sidebarReducer,
   posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>
