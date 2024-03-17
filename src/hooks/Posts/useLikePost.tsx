import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../types";
import Endpoints from "./Endpoints";

interface OnError {
    previousPost: PostType;
}

const useLikePost = (postId: number, type: "post"|"comment") => {
    const queryClient = useQueryClient();
    const { likePost } = Endpoints();

    let queryName: string;
    if (type === "post") {
        queryName = "posts";
    } else if (type === "comment") {
        queryName = "comments";
    }

    const {
        mutate,
        isPending: likePending,
        isError: likeError,
    } = useMutation({
        mutationFn: () => likePost(postId, type),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: [queryName, postId] });
            const previousPost = queryClient.getQueryData([queryName, postId]);
            // Update the is_liked property optimistically
            queryClient.setQueryData([queryName, postId], (old: PostType) => ({
                ...old,
                is_liked: true,
            }));

            return { previousPost };
        },
        onError: (context: OnError) => {
            // Rollback to the previous state on error
            queryClient.setQueryData([queryName, postId], context.previousPost);
        },
        onSettled: async () => {
            // Invalidate the query after the mutation is settled
            await queryClient.invalidateQueries({ queryKey: [queryName] });
        },
    });

    const handleLike = () => {
        // Trigger the like mutation
        mutate();
    };

    return { handleLike, likePending, likeError };
};

export default useLikePost;
