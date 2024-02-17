import DefaultAvater from "../../assets/default.webp";
import Image from "../common/Image";
import HeaderMenu from "./HeaderMenu";

const PostHeader = () => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src={DefaultAvater}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col ml-3">
                        <p className="text-lg font-medium">Author of post</p>
                        <span className="flex gap-1 items-center">
                            <p className="italic font-light leading-3">
                                @username
                            </p>
                            <p className="w-1 h-1 bg-white rounded-full"></p>
                            <span className="text-xs font-light">
                                1 day ago
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
