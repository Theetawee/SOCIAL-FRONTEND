import { Link } from "react-router-dom";
import { PostType } from "../../../hooks/types";
import ShareMenu from "./ShareMenu";
import { FaLink } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";

const PostFooter = ({postAction,post}:{postAction:JSX.Element,post:PostType}
) => {


    return (
        <div>
            {post.taged_accounts && post.taged_accounts.length !== 0 && (
                <div className="flex items-center">
                    <FaLink className="w-5 h-5 mr-1 text-gray-500"/>
                <div className="flex items-center gap-2">
                    {post.taged_accounts.map((account) => (
                        <div key={account.id} onClick={(e) => e.stopPropagation()}>
                            <Link to={`/${account.username}`} className="flex text-sm italic hover:text-primary-600  items-center"><p>@{account.username}</p></Link>
                        </div>
                    ))}
                </div></div>)}
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-x-5">
                <div>{postAction}</div>
                <Link to={`/posts/${post.id}`} className="flex items-center">
                <div className="flex items-center">
                    <BiMessage className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-500 ml-1">{post.total_comments}</span>
                </div></Link>
                </div>
                <div>
                    <ShareMenu post={post}/>
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
