import { Post } from '../App'
import PostItem from './PostItem'

// типизация списка постов
interface PostListProps {
  posts: Post[]
  title: string
  removePost: (id: string) => void
}

const PostList = ({ posts, title, removePost }: PostListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map(post => (
        <PostItem
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          removePost={removePost}
        />
      ))}
    </div>
  )
}

export default PostList
