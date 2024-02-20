import DefaultAvater from "../../../assets/default.webp";
import { PostType } from "../../../hooks/types";
import Image from "../../common/Image";
import VerifiedSvg from "../Account/VerifiedSvg";
import HeaderMenu from "./HeaderMenu";

const PostHeader = ({ post}: { post: PostType }) => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src={post.account.image || DefaultAvater}
                        hash={post.account.profile_image_hash}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col ml-3">
                        <p className="text-lg font-medium flex items-center">{post.account.name}
                        {post.account.verified && (
                            <VerifiedSvg/>
                        )}
                        </p>
                        <span className="flex gap-1 items-center">
                            <p className="italic font-light leading-3">
                                @{post.account.username}
                            </p>
                            <p className="w-1 h-1 bg-white rounded-full"></p>
                            <span className="text-xs font-light">
                                {post.timestamp}
                            </span>
                        </span>
                    </div>
                </div>
                <div>
                    <HeaderMenu />
                </div>
            </div>
        </header>
    );
};

export default PostHeader;
