import ShareMenu from "./ShareMenu";

const PostFooter = ({postAction,postId}:{postAction:JSX.Element,postId:number}
) => {

    return (
        <div>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between"
            >
                <div>{postAction}</div>
                <div>
                    <ShareMenu postId={postId}/>
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
