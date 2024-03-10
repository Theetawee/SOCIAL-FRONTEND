import { CommentType } from "../../../hooks/types"

const Comment = ({comment}:{comment:CommentType}) => {
  return (
    <div>{comment.content}</div>
  )
}

export default Comment