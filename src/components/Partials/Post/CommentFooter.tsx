import { Link } from "react-router-dom";
import { CommentType } from "../../../hooks/types";
import { FaLink } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";

const CommentFooter = ({
  postAction,
  comment,
}: {
  postAction: JSX.Element;
  comment: CommentType;
}) => {
  return (
    <div className="px-6 pb-2">
      {comment.taged_accounts && comment.taged_accounts.length !== 0 && (
        <div className="flex items-center">
          <FaLink className="w-5 h-5 mr-1 text-gray-500" />
          <div className="flex items-center gap-2">
            {comment.taged_accounts.map((account) => (
              <div key={account.id} onClick={(e) => e.stopPropagation()}>
                <Link
                  to={`/${account.username}`}
                  className="flex text-sm italic hover:text-primary-600  items-center">
                  <p>@{account.username}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-between">
        <div>{postAction}</div>
        <button  className="flex items-center">
          <div className="flex items-center">
            <BiMessage className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-500 ml-1">
              0
            </span>
          </div>
        </button>
        
      </div>
    </div>
  );
};

export default CommentFooter;
