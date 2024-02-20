import { useInfiniteQuery } from "@tanstack/react-query";
import Endpoints from "../../../hooks/Posts/Endpoints";
import { Suspense } from "react";
import Seo from "../../utils/Seo";
import CommonError from "../../common/CommonError";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoMdRefresh } from "react-icons/io";
import Post from "../Post/Post";
import PostSkelton from "../Post/PostSkeleton";
import PostLoader from "../Post/PostLoader";

const Posts = () => {
    const { GetAllPosts } = Endpoints();

    const { data, fetchNextPage, hasNextPage, isPending, isError } =
        useInfiniteQuery({
            queryKey: ["posts"],
            networkMode: "offlineFirst",
            queryFn: (pageNum) => GetAllPosts(pageNum.pageParam || 1),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => lastPage.next,
        });

    const posts = data?.pages.flatMap((page) => page.results);

    if (isPending) {
        return (
            <Seo title={"Loading... / Waanverse"} description={"Loading..."}>
                <PostSkelton />
            </Seo>
        );
    } else if (isError) {
        return (
            <Seo
                title={"Error!!  / Waanverse"}
                description={"Something went wrong."}
            >
                <CommonError />
            </Seo>
        );
    } else {
        return (
            <Suspense fallback={<PostSkelton />}>
                <Seo
                    title={"Home / Waanverse"}
                    description={"Waanverse Homepage."}
                >
                    <InfiniteScroll
                        dataLength={posts?.length || 0}
                        next={fetchNextPage}
                        hasMore={hasNextPage}
                        loader={<PostLoader image />}
                        scrollThreshold={0.8}
                        endMessage={
                            <div className="text-center p-4">
                                <h5>No more posts.</h5>
                            </div>
                        }
                        pullDownToRefresh
                        refreshFunction={() => GetAllPosts()}
                        pullDownToRefreshThreshold={1000}
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
                                {posts?.map((post) => (
                                    <Suspense
                                        fallback={<PostLoader />}
                                        key={post.id}
                                    >
                                        <Post post={post} />
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

export default Posts;
