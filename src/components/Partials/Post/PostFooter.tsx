import { Link } from "react-router-dom";
import { PostType } from "../../../hooks/types";
import ShareMenu from "./ShareMenu";
import { FaLink } from "react-icons/fa6";


const PostFooter = ({postAction,post}:{postAction:JSX.Element,post:PostType}
) => {


    return (
        <div>
            {post.taged_accounts && post.taged_accounts.length !== 0 && (
                <div className="flex items-center">
                    <FaLink className="w-5 h-5 mr-2 text-gray-500"/>
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
                <div>{postAction}</div>
                <div>
                    <ShareMenu post={post}/>
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
