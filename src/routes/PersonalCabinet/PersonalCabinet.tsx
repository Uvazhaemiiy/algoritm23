import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarLayout } from 'layouts/SidebarLayout'
import { RootState } from 'store'
import { 
  fetchPosts, 
  createPost, 
  updatePostAction, 
  deletePostAction 
} from 'store/actions/posts.actions'
import { IPost, ICreatePost } from 'store/types/posts.types'
import { toast } from 'react-toastify'
import { AppDispatch } from 'store'

const PersonalCabinet: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { posts, loading, error } = useSelector((state: RootState) => state.posts)
  
  const [isCreating, setIsCreating] = useState(false)
  const [editingPost, setEditingPost] = useState<IPost | null>(null)
  const [formData, setFormData] = useState<ICreatePost>({
    title: '',
    content: '',
    imageUrl: '',
    tags: []
  })
  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.content.trim()) {
      toast.error('Заполните обязательные поля')
      return
    }

    try {
      if (editingPost) {
        await dispatch(updatePostAction({ ...formData, id: editingPost.id }))
        toast.success('Пост успешно обновлен')
        setEditingPost(null)
      } else {
        await dispatch(createPost(formData))
        toast.success('Пост успешно создан')
        setIsCreating(false)
      }
      
      resetForm()
    } catch (error) {
      toast.error('Произошла ошибка')
    }
  }

  const handleEdit = (post: IPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl || '',
      tags: post.tags || []
    })
    setIsCreating(true)
  }

  const handleDelete = async (postId: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
      try {
        await dispatch(deletePostAction(postId))
        toast.success('Пост успешно удален')
      } catch (error) {
        toast.error('Произошла ошибка при удалении')
      }
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      imageUrl: '',
      tags: []
    })
    setTagInput('')
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const cancelEdit = () => {
    setEditingPost(null)
    resetForm()
    setIsCreating(false)
  }

  return (
    <SidebarLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Личный кабинет
          </h1>
          <p className="mt-2 text-gray-600">
            Управляйте постами для главной страницы
          </p>
        </div>

        {/* Форма создания/редактирования поста */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {editingPost ? 'Редактировать пост' : 'Создать новый пост'}
            </h2>
            {!isCreating && !editingPost && (
              <button
                onClick={() => setIsCreating(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Создать пост
              </button>
            )}
          </div>

          {(isCreating || editingPost) && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Заголовок *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите заголовок поста"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Содержание *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Введите содержание поста"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL изображения
                </label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Теги
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите тег и нажмите Enter"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Добавить
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-md transition-colors"
                >
                  {loading ? 'Сохранение...' : (editingPost ? 'Обновить' : 'Создать')}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Отмена
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Список постов */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Существующие посты ({posts.length})
          </h2>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Загрузка постов...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Постов пока нет. Создайте первый пост!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post: IPost) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Редактировать
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-3 line-clamp-3">{post.content}</p>
                  
                  {post.imageUrl && (
                    <div className="mb-3">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-32 h-24 object-cover rounded-md"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-500">
                    <span>Автор: {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>Создан: {new Date(post.createdAt).toLocaleDateString('ru-RU')}</span>
                    {post.updatedAt !== post.createdAt && (
                      <>
                        <span className="mx-2">•</span>
                        <span>Обновлен: {new Date(post.updatedAt).toLocaleDateString('ru-RU')}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SidebarLayout>
  )
}

export default PersonalCabinet
