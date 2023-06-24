// типизация одного поста
interface PostItemProps {
  id: string
  title: string
  body: string
  removePost: (id: string) => void
}

const PostItem = ({ title, body, id, removePost }: PostItemProps) => {
  const handleOnClick = () => {
    // удаление поста по уникальному id
    removePost(id)
  }
  // управление постом - тайтл, боди и кнопка удаления поста
  return (
    <div className="post">
      <div className="post_content">
        <strong>{title}</strong>
      </div>
      <div>{body}</div>
      <div className="post_btn">
        <button onClick={handleOnClick}>Удалить!</button>
      </div>
    </div>
  )
}

export default PostItem
