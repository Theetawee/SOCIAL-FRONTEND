import { PostType } from "../../../hooks/types";
import ShareMenu from "./ShareMenu";

const PostFooter = ({postAction,post}:{postAction:JSX.Element,post:PostType}
) => {

    return (
        <div>
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between"
            >
                <div>{postAction}</div>
                <div>
                    <ShareMenu post={post}/>
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
