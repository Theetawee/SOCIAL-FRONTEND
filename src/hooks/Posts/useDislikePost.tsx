import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../types";
import Endpoints from "./Endpoints";
interface OnError {
    previousPost: PostType;
}

const useDislikePost = (postId: number, type: string) => {
    const queryClient = useQueryClient();
    const { dislikePost } = Endpoints();
    let queryName: string;
    if (type === "post") {
        queryName = "posts";
    } else if (type === "comment") {
        queryName = "comments";
    }
    const {
        mutateAsync: dislikeAction,
        isPending: dislikePending,
        isError: dislikeError,
    } = useMutation({
        mutationFn: () => dislikePost(postId, type),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: [queryName, postId] });
            const previousPost = queryClient.getQueryData([queryName, postId]);

            // Update the is_liked property optimistically
            queryClient.setQueryData([queryName, postId], (old: PostType) => ({
                ...old,
                is_liked: false,
                is_disliked: true,
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

    const handleDisLike = () => {
        // Trigger the like mutation
        dislikeAction();
    };

    return { handleDisLike, dislikePending, dislikeError };
};

export default useDislikePost;
