import { Link } from "react-router-dom";
import { CommentType } from "../../../hooks/types";
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";
import Name from "../Account/Name";
import usePostAction from "../../../hooks/Posts/usePostActions";
import CommentFooter from "./CommentFooter";

const Comment = ({ comment }: { comment: CommentType }) => {
  const { likeStatus} = usePostAction(comment.id,comment.total_likes,comment.is_liked,"comment");
  return (
    <>
      <article className="pl-2">
        <header onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <Link to={`/${comment.account.username}`}>
              <div className="flex relative items-center">
                <div className="w-0.5 h-8 absolute -top-8 left-5 bg-gray-200 dark:bg-gray-700"></div>
                <Image
                  src={comment.account.image || DefaultAvater}
                  hash={comment.account.profile_image_hash}
                  alt="User"
                  className="w-10 h-10 border-2 border-gray-200 dark:border-gray-700 rounded-full"
                />

                <div className="flex flex-col ml-3">
                  <Name
                    name={comment.account.name}
                    verified={comment.account.verified}
                  />
                  <span className="flex gap-2 items-center">
                    <p className="italic font-light leading-3">
                      @{comment.account.username}
                    </p>
                    <p className="w-1 h-1 bg-gray-500 dark:bg-gray-500 rounded-full"></p>
                    <span className="text-xs font-light">
                      {comment.creation_date}
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </header>
        <div className="ml-5 border-l-2 dark:border-gray-700">
          <div className="pt-6 pb-3 pl-4">{comment.content}</div>
          <CommentFooter postAction={likeStatus} comment={comment}/>
          <hr className="h-0.5 bg-gray-200 mb-4 border-0 dark:bg-gray-700" />
        </div>
      </article>
    </>
  );
};

export default Comment;
