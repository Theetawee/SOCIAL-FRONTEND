import { PostType } from "../../hooks/types"
import PostBody from "./PostBody"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import "./Post.css"



const Post = ({post}:{post:PostType}) => {
  return (
    <article className="grid w-full max-w-screen-md mx-auto border dark:border-gray-800/50 border-gray-100 p-4 rounded-xl shadow-sm grid-cols-1 gap-4">
      <PostHeader post={post}/>
      <PostBody post={post}/>
      <PostFooter post={post}/>
    </article>
  )
}

export default Post
