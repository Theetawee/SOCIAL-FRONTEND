import { Link } from "react-router-dom";
import DefaultAvater from "../../../assets/default.webp";
import { PostType } from "../../../hooks/types";
import Image from "../../common/Image";
import HeaderMenu from "./HeaderMenu";
import Name from "../Account/Name";

const PostHeader = ({ post}: { post: PostType }) => {
    return (
        <header onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
                <Link to={`/${post.account.username}`}>

                <div className="flex items-center">
                    <Image
                        src={post.account.image || DefaultAvater}
                        hash={post.account.profile_image_hash}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                        />

                        <div className="flex flex-col ml-3">
                            <Name name={post.account.name} verified={post.account.verified} />
                        <span className="flex gap-2 items-center">
                            <p className="italic font-light leading-3">
                                @{post.account.username}
                            </p>
                            <p className="w-1 h-1 bg-gray-500 dark:bg-gray-500 rounded-full"></p>
                            <span className="text-xs font-light">
                                {post.timestamp}
                            </span>
                        </span>
                        </div>
                    </div>
                    </Link>
                <div>
                    <HeaderMenu />
                </div>
            </div>
        </header>
    );
};

export default PostHeader;
