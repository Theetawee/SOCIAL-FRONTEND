import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const Post = () => {
    return (
        <>
            <article className="p-4 hover:bg-gray-50/20 cursor-pointer grid grid-cols-1 gap-3 transition ease-in-out duration-200 dark:hover:bg-gray-900/50 rounded">
                <PostHeader />
                <section>
                    <PostBody />
                </section>
                <section>
                    <PostFooter />
                </section>
            </article>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    );
};

export default Post;
