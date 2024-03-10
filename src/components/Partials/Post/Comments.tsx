import { Suspense } from "react";
import Seo from "../../utils/Seo";
import CommonError from "../../common/CommonError";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoMdRefresh } from "react-icons/io";
import PostSkelton from "../Post/PostSkeleton";
import PostLoader from "../Post/PostLoader";
import useComment from "../../../hooks/Posts/useComment";
import Comment from "./Comment";

const Comments = ({postId}:{postId:number}) => {
  
    const { isPending,isError,comments,fetchNextPage,hasNextPage} = useComment(postId);



  if (isPending) {
    return (
      <Seo title={"Loading... / Waanverse"} description={"Loading..."}>
        <PostSkelton />
      </Seo>
    );
  } else if (isError) {
    return (
      <Seo title={"Error!!  / Waanverse"} description={"Something went wrong."}>
        <CommonError />
      </Seo>
    );
  } else {
    return (
      <Suspense fallback={<PostSkelton />}>
        <Seo title={"Home / Waanverse"} description={"Waanverse Homepage."}>
          {" "}
          <InfiniteScroll
            dataLength={comments?.length || 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<PostLoader image />}
            scrollThreshold={0.8}
            endMessage={
              <div className="text-center p-4">
                <h5>No more posts.</h5>
              </div>
            }
            pullDownToRefresh={false}
            pullDownToRefreshContent={
              <div className="flex items-center justify-center  gap-1">
                <IoMdRefresh className="w-5 h-5 animate-spin" />
              </div>
            }
            releaseToRefreshContent={
              <div className="flex items-center justify-center gap-1">
                <IoMdRefresh className="w-5 h-5 animate-spin" />
              </div>
            }
          >
            <div>
              <ul>
                {comments?.map((comment) => (
                  <Suspense fallback={<PostLoader />} key={comment.id}>
                    <Comment comment={comment} />
                  </Suspense>
                ))}
              </ul>
            </div>
          </InfiniteScroll>
        </Seo>
      </Suspense>
    );
  }
};

export default Comments;
