import {
  FaRegCommentDots,
  FaBookmark,
  FaRegBookmark,
  FaFaceKissWinkHeart,
} from "react-icons/fa6";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { PostType } from "../../hooks/types";
import { MdAutoGraph } from "react-icons/md";

interface Props {
  post: PostType;
}

const PostFooter = ({ post }: Props) => {
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
    </footer>
  );
};

export default PostFooter;
