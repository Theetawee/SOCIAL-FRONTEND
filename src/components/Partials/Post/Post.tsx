import { useNavigate } from "react-router-dom";
import { PostType } from "../../../hooks/types";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import usePostAction from "../../../hooks/Posts/usePostActions";

const Post = ({ post }: { post: PostType }) => {


    const {likeStatus } = usePostAction(post.id, post.total_likes, post.is_liked);
    console.log(post)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <>
            <article onClick={handleClick} className="p-4 hover:bg-gray-50/20 cursor-pointer grid grid-cols-1 gap-3 transition ease-in-out duration-200 dark:hover:bg-gray-900/50 rounded">
                <PostHeader post={post} />
                <section>
                    <PostBody files={post.post_images} content={post.content} id={post.id}/>
                </section>
                <section>
                    <PostFooter postAction={likeStatus} />
                </section>
            </article>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    );
};

export default Post;
