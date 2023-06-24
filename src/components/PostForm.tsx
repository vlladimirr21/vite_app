import { useState, type FC, type ChangeEvent } from 'react'
import Button from './UI/Button/Button'
import Input from './UI/Input/Input'
import type { Post } from '../App'

// описываем функцию добавления поста
interface PostFormProps {
  addNewPost: (post: Post) => void
}

const PostForm: FC<PostFormProps> = ({ addNewPost }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleTitleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setTitle(inputValue)
  }

  const handleBodyOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setBody(inputValue)
  }

  const createPost = (): Post => {
    return { id: new Date().toString(), title: title, body: body }
  }
  // функция создания поста
  const handleButtonOnClick = () => {
    const newPost = createPost()
    addNewPost(newPost)
    setTitle('')
    setBody('')
  }

  return (
    <div>
      <Input
        value={title}
        onChange={handleTitleOnChange}
        placeholder="Название поста"
      />
      <Input
        value={body}
        onChange={handleBodyOnChange}
        placeholder="Описание поста"
      />
      <Button text="Create post!" onClick={handleButtonOnClick} />
    </div>
  )
}

export default PostForm
