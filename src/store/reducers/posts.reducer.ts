import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../types/posts.types'

interface PostsState {
  posts: IPost[]
  loading: boolean
  error: string | null
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state: PostsState, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload
      state.loading = false
      state.error = null
    },
    addPost: (state: PostsState, action: PayloadAction<IPost>) => {
      state.posts.unshift(action.payload)
      state.error = null
    },
    updatePost: (state: PostsState, action: PayloadAction<IPost>) => {
      const index = state.posts.findIndex((post: IPost) => post.id === action.payload.id)
      if (index !== -1) {
        state.posts[index] = action.payload
      }
      state.error = null
    },
    deletePost: (state: PostsState, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post: IPost) => post.id !== action.payload)
      state.error = null
    },
    setLoading: (state: PostsState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state: PostsState, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
    clearError: (state: PostsState) => {
      state.error = null
    }
  }
})

export const {
  setPosts,
  addPost,
  updatePost,
  deletePost,
  setLoading,
  setError,
  clearError
} = postsSlice.actions

export default postsSlice.reducer
