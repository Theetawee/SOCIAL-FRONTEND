import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostType } from "../types";
import Endpoints from "./Endpoints";

interface OnError {
    previousPost: PostType;
}

const useDislikePost = (postId: number, type: string) => {
    const queryClient = useQueryClient();
    const { dislikePost } = Endpoints();
    const queryName = type === "post" ? "posts" : "comments";


    const {isPending:dislikePending,isError:dislikeError,mutateAsync} = useMutation({
        mutationFn: () => dislikePost(postId, type),
        onMutate: async () => {
            await queryClient.cancelQueries({
                queryKey: [queryName, postId],
            });
            const previousPost = queryClient.getQueryData<PostType>([
                queryName,
                postId,
            ]);
            if (previousPost) {
                queryClient.setQueryData<PostType>([queryName, postId], {
                    ...previousPost,
                    is_disliked: true,
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

    const handleDisLike=() => {
        mutateAsync();
    }

    return {
        handleDisLike,
        dislikePending,
        dislikeError
    };
};

export default useDislikePost;
