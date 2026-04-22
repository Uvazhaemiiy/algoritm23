import { Dispatch } from '@reduxjs/toolkit'
import { IPost, ICreatePost, IUpdatePost } from '../types/posts.types'
import { 
  setPosts, 
  addPost, 
  updatePost, 
  deletePost, 
  setLoading, 
  setError 
} from '../reducers/posts.reducer'

// Генерируем уникальный ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Получить все посты
export const fetchPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true))
    
    // Получаем посты из localStorage
    const storedPosts = localStorage.getItem('posts')
    const posts: IPost[] = storedPosts ? JSON.parse(storedPosts) : []
    
    dispatch(setPosts(posts))
  } catch (error) {
    dispatch(setError('Ошибка при загрузке постов'))
  }
}

// Создать новый пост
export const createPost = (postData: ICreatePost) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true))
    
    const newPost: IPost = {
      ...postData,
      id: generateId(),
      author: 'Администратор', // Можно заменить на реального пользователя
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // Получаем существующие посты
    const storedPosts = localStorage.getItem('posts')
    const posts: IPost[] = storedPosts ? JSON.parse(storedPosts) : []
    
    // Добавляем новый пост
    const updatedPosts = [newPost, ...posts]
    
    // Сохраняем в localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    
    dispatch(addPost(newPost))
  } catch (error) {
    dispatch(setError('Ошибка при создании поста'))
  }
}

// Обновить пост
export const updatePostAction = (postData: IUpdatePost) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true))
    
    const updatedPost: IPost = {
      ...postData,
      updatedAt: new Date().toISOString()
    } as IPost
    
    // Получаем существующие посты
    const storedPosts = localStorage.getItem('posts')
    const posts: IPost[] = storedPosts ? JSON.parse(storedPosts) : []
    
    // Обновляем пост
    const updatedPosts = posts.map(post => 
      post.id === postData.id ? updatedPost : post
    )
    
    // Сохраняем в localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    
    dispatch(updatePost(updatedPost))
  } catch (error) {
    dispatch(setError('Ошибка при обновлении поста'))
  }
}

// Удалить пост
export const deletePostAction = (postId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true))
    
    // Получаем существующие посты
    const storedPosts = localStorage.getItem('posts')
    const posts: IPost[] = storedPosts ? JSON.parse(storedPosts) : []
    
    // Удаляем пост
    const updatedPosts = posts.filter(post => post.id !== postId)
    
    // Сохраняем в localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    
    dispatch(deletePost(postId))
  } catch (error) {
    dispatch(setError('Ошибка при удалении поста'))
  }
}
