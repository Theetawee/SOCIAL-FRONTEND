import { useParams } from "react-router-dom";
import usePostDetail from "../../hooks/Posts/usePostDetail";
import PostLoader from "../../components/Partials/Post/PostLoader";
import CommonError from "../../components/common/CommonError";
import Seo from "../../components/utils/Seo";
import { isAxiosError } from "axios";
import NotFound from "../../components/common/NotFound";
import Loader from "../../components/common/Loader";
import useTopbar from "../../hooks/useTopbar";
import { lazy } from "react";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
import PostHeader from "../../components/Post/PostHeader";
import PostBody from "../../components/Post/PostBody";
import PostFooter from "../../components/Post/PostFooter";
const CommentSection = lazy(
  () => import("../../components/Partials/Post/CommentSection")
);

const PostDetailPage = () => {
  useTopbar("Post", true);
  const { id } = useParams();
  const post_id = parseInt(id!);
  const { post, isPending, isError, error } =
    usePostDetail(post_id);

  if (isPending) {
    return (
      <Seo title={"Loading... / Waanverse"} description={"Loading..."}>
        <PostLoader image />
        <Loader />
      </Seo>
    );
  } else if (isError) {
    if (isAxiosError(error) && error.response?.data.detail === "Not found.") {
      return (
        <Seo
          title={"Post not found!!  / Waanverse"}
          description={"Something went wrong."}>
          <NotFound type="post" />
        </Seo>
      );
    } else {
      return (
        <Seo
          title={"Error!!  / Waanverse"}
          description={"Something went wrong."}>
          <CommonError />
        </Seo>
      );
    }
  } else {
    return (
      <>
        {post ? (
          <Seo
            title={`${post.account?.name} on Waanverse: ${post.content.slice(
              0,
              30
            )}...`}
            description={post.content}>
            <section className="pt-4">
              <article className="grid grid-cols-1 gap-y-4 rounded w-full">
                <header className="px-4">
                  <PostHeader post={post} />
                </header>
                <main className="px-4">
                  <PostBody post={post} />
                </main>
                <footer className="px-4">
                  <PostFooter post={post} />
                </footer>
                <hr className="border-t h-px border-gray-300 dark:border-gray-800" />
              </article>
            </section>
            <section>
              <SuspenseLoader>
                <CommentSection postId={post.id} />
              </SuspenseLoader>
            </section>
          </Seo>
        ) : (
          <PostLoader />
        )}
      </>
    );
  }
};

export default PostDetailPage;
