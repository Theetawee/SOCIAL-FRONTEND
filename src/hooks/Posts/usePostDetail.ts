import { useQuery } from "@tanstack/react-query";
import Endpoints from "./Endpoints";
import usePostAction from "./usePostActions";

const usePostDetail = (postId: number) => {
    const { getPostById } = Endpoints();
    const {
        isPending,
        data: post,
        isError,
        error,
    } = useQuery({
        queryKey: ["posts", postId],
        queryFn: () => getPostById(postId),
    });

    const postLikes = post?.total_likes || 0;
    const postIsLiked = post?.is_liked || false;

    const { likeStatus } = usePostAction(postId, postLikes, postIsLiked);

    return {
        likeStatus,
        isPending,
        post,
        isError,
        error,
    };
};

export default usePostDetail;
