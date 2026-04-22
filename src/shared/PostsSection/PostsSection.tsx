import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from 'store'
import { fetchPosts } from 'store/actions/posts.actions'
import { IPost } from 'store/types/posts.types'

const PostsSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { posts, loading } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto" />
          <p className="mt-3 text-slate-600">Загрузка новостей...</p>
        </div>
      </section>
    )
  }

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-slate-800 sm:text-3xl">Последние новости</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">Будьте в курсе последних событий и обновлений</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post: IPost) => (
            <article key={post.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-44 w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              )}

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 line-clamp-2">{post.title}</h3>

                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.content}</p>

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag: string, index: number) => (
                      <span key={index} className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && <span className="text-xs text-slate-500">+{post.tags.length - 3} еще</span>}
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.createdAt).toLocaleDateString('ru-RU')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length > 6 && (
          <div className="mt-6 text-center">
            <button className="inline-flex items-center justify-center rounded-full bg-gray-600 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-500">
              Показать все новости
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PostsSection
