import usePostActions from "../../../hooks/Posts/usePostActions";
import ShareMenu from "./ShareMenu";
import ThumbDownIcon from "./ThumbDownIcon";
import ThumbUpIcon from "./ThumbUpIcon";

const PostFooter = ({
    is_liked,
    is_disliked,
    post_id
}: {
    is_liked: boolean;
        is_disliked: boolean;
        post_id: number;
    }) => {

    const {handleDisLike } = usePostActions(post_id,'post');







    return (
        <div>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between"
            >
                <div className="grid grid-cols-2 gap-5">
                    <button>
                        {is_liked ? (
                            <>
                                <ThumbUpIcon
                                    checked
                                    className="dark:text-gray-200 text-gray-600 w-6 h-6"
                                />
                            </>
                        ) : (
                            <>
                                <ThumbUpIcon
                                    checked={false}
                                    className="dark:text-gray-200 text-gray-600 w-6 h-6"
                                />
                            </>
                        )}
                    </button>
                    <button onClick={handleDisLike}>
                        {is_disliked ? (
                            <>
                                <ThumbDownIcon
                                    checked
                                    className="dark:text-gray-200 text-gray-600 w-6 h-6"
                                />
                            </>
                        ) : (
                            <>
                                <ThumbDownIcon
                                    checked={false}
                                    className="dark:text-gray-200 text-gray-600 w-6 h-6"
                                />
                            </>
                        )}
                    </button>
                </div>
                <div>
                    <ShareMenu />
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
