import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../types";
import Endpoints from "./Endpoints";

interface OnError {
    previousPost: PostType;
}

const useLikePost = (postId: number, type: string) => {
    const queryClient = useQueryClient();
    const { likePost } = Endpoints();
    const queryName = type === "post" ? "posts" : "comments";

    const {isPending:likePending,mutateAsync,isError:likeError} = useMutation({
        mutationFn: () => likePost(postId, type),
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: [queryName, postId] });
            const previousPost = queryClient.getQueryData<PostType>([
                queryName,
                postId,
            ]);
            if (previousPost) {
                queryClient.setQueryData<PostType>([queryName, postId], {
                    ...previousPost,
                    is_liked: true,
                });
            }
            return { previousPost };
        },
        onError: (context: OnError) => {
            queryClient.setQueryData([queryName, postId], context.previousPost);
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryName],
            });
        },
    });

    const handleLike = () => {
        mutateAsync();
    }


    return {handleLike,likePending,likeError}
};

export default useLikePost;
