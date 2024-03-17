import useDislikePost from "./useDislikePost";
import useLikePost from "./useLikePost";
import LikeButton from "../../components/Partials/Post/LikeButton";

const usePostAction = (
    post_id: number,
    total_likes: number,
    is_liked: boolean,
    type : "post"|"comment"
) => {
    const { dislikePending, handleDisLike,dislikeError } = useDislikePost(
        post_id,
        type
    );



    const { likePending, handleLike, likeError } = useLikePost(post_id, type);

    let content;

    if (likePending) {
        content = <LikeButton type="like" likes={total_likes + 1} />;
    } else if (dislikePending) {
        content = <LikeButton type="dislike" likes={total_likes - 1} />;
    } else if (likeError) {
        content = (
            <>
                <LikeButton type="dislike" likes={total_likes} />
            </>
        );
    } else if (dislikeError) {
        content = (
            <>
                <LikeButton type="like" likes={total_likes} />
            </>
        );
    } else {
        if (is_liked) {
            content = (
                <LikeButton
                    type="like"
                    likes={total_likes}
                    onclick={handleDisLike}
                />
            );
        } else {
            content = (
                <LikeButton
                    type="dislike"
                    likes={total_likes}
                    onclick={handleLike}
                />
            );
        }
    }

    return {
        likeStatus: content,
    };
};

export default usePostAction;
