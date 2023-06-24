import './styles/App.scss' //подключение стилей
import { useCallback, useState } from 'react'
import PostList from './components/PostList' //список постов
import PostForm from './components/PostForm' //Форма для поста

//Типизация одного поста - что входит
export interface Post {
  id: string
  title: string
  body: string
}
//
function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: '1', title: 'Js 1', body: 'Description 1' },
    { id: '2', title: 'Js 2', body: 'Description 2' },
    { id: '3', title: 'Js 3', body: 'Description 3' },
  ])

  const addNewPost = useCallback(
    (post: Post) => {
      setPosts(prev => [...prev, post])
    },
    [setPosts]
  )
  // функция для удаления поста
  const removePost = (id: string) => {
    const filteredPosts = posts.filter(post => post.id !== id)
    setPosts(filteredPosts)
  }

  return (
    <div className="App">
      {/* в форму добавления поста добавляем действие добавить пост */}
      <PostForm addNewPost={addNewPost} />
      {/* этот блок - формирует список постов в нем */}
      <PostList
        posts={posts}
        title={'Список постов 1'}
        removePost={removePost}
      />
    </div>
  )
}

export default App
