import { PostType } from "../../hooks/types";

interface Props{
    post: PostType;
}

const PostBody = ({post}: Props) => {
  return (
    <main className="pl-12">
        <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{post.content}</p>
    </main>
  );
};

export default PostBody;
