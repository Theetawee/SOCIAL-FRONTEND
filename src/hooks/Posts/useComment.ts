import { useInfiniteQuery } from "@tanstack/react-query";
import Endpoints from "./Endpoints";

const useComment = (postId:number) => {

    const { getPostComments} = Endpoints();
    





const { data, fetchNextPage, hasNextPage, isPending, isError } =
  useInfiniteQuery({
    queryKey: ["comments",postId],
    networkMode: "offlineFirst",
    queryFn: (pageNum) => getPostComments(postId,pageNum.pageParam || 1),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

const comments = data?.pages.flatMap((page) => page.results);


    return {
        comments,
        fetchNextPage,
        hasNextPage,
        isPending,
        isError
}


  
}

export default useComment