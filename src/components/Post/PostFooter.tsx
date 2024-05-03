import {
  FaRegCommentDots,
  FaBookmark,
  FaRegBookmark,
  FaFaceKissWinkHeart,
} from "react-icons/fa6";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { PostType } from "../../hooks/types";
import { MdAutoGraph } from "react-icons/md";
import utils from "../../hooks/utils";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";


interface Props {
  post: PostType;
}

const PostFooter = ({ post }: Props) => {
  const {DefaultAvater}=utils();
  const {
    views,
    total_comments,
    total_likes,
    is_liked,
    bookmarked,
    total_bookmarks,
  } = post;
  return (
    <footer className="pl-12">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-x-2">
          <FaRegCommentDots className="normal_footer_icons" />
          <span className="normal_footer_text">{total_comments}</span>
        </button>
        <div>
          <button className="flex items-center gap-x-2">
            {is_liked ? (
              <>
                <FaFaceKissWinkHeart className="w-5 text-yellow-600/90 h-5" />
              </>
            ) : (
              <FaRegKissWinkHeart className="normal_footer_icons" />
            )}
            <span className="normal_footer_text">{total_likes}</span>
          </button>
        </div>
        <div>
          <button className="flex items-center gap-x-2">
            {bookmarked ? (
              <>
                <FaBookmark className="w-5 text-blue-600/90 h-5" />
              </>
            ) : (
              <FaRegBookmark className="normal_footer_icons" />
            )}
            <span className="normal_footer_text">{total_bookmarks}</span>
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <span>
            <MdAutoGraph className="normal_footer_icons" />
          </span>
          <span className="normal_footer_text">{views}</span>
        </div>
      </div>
      <div className="flex pt-3 items-center justify-between gap-x-4">
      {total_likes > 0 && (
        <>
          <div className="pt-3 flex items-center gap-x-1">
            {total_likes === 1 ? (
              <>
                <div className="flex relative -space-x-4 rtl:space-x-reverse">
                  <a href="">
                    <img
                      className="w-8 h-8  rounded-full"
                      src={post.likes[0].image||DefaultAvater}
                      alt={post.likes[0].name}
                    />
                  </a>
                  <span>
                    <FcLike className="w-4 absolute bottom-0 -right-6 h-4" />
                  </span>
                </div>
                
              </>
            ) : (
              <>
                <div className="flex relative -space-x-4 rtl:space-x-reverse">
                  <img
                    className="w-8 h-8  rounded-full"
                    src={post.likes[1].image||DefaultAvater}
                    alt={post.likes[0].name}
                  />
                  <a
                    className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700  rounded-full hover:bg-gray-600"
                    href="#">
                    +{total_likes-1}
                  </a>
                  <span>
                  <FcLike className="w-4 absolute bottom-0 -right-6 h-4" />

                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
      <Link to={"/"} className="py-2 justify-items-end flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md px-5">View Post</Link>
      </div>
    </footer>
  );
};

export default PostFooter;
