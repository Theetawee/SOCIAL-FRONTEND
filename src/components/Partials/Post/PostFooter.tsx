import ShareMenu from "./ShareMenu";

const PostFooter = ({postAction}:{postAction:JSX.Element}
) => {

    return (
        <div>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between"
            >
                <div>{postAction}</div>
                <div>
                    <ShareMenu />
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
