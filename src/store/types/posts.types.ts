export interface IPost {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  imageUrl?: string
  tags?: string[]
}

export interface ICreatePost {
  title: string
  content: string
  imageUrl?: string
  tags?: string[]
}

export interface IUpdatePost extends Partial<ICreatePost> {
  id: string
}



