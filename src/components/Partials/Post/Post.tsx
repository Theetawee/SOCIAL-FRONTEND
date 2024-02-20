import { PostType } from "../../../hooks/types";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Post = ({ post }: { post: PostType }) => {
    return (
        <>
            <article className="p-4 hover:bg-gray-50/20 cursor-pointer grid grid-cols-1 gap-3 transition ease-in-out duration-200 dark:hover:bg-gray-900/50 rounded">
                <PostHeader post={post} />
                <section>
                    <PostBody content={post.content}/>
                </section>
                <section>
                    <PostFooter post_id={post.id} is_disliked={post.is_disliked} is_liked={post.is_liked}/>
                </section>
            </article>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    );
};

export default Post;
