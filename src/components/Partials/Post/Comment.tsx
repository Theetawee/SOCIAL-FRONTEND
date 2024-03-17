import { Link } from "react-router-dom";
import { CommentType } from "../../../hooks/types"
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";
import Name from "../Account/Name";



const Comment = ({comment}:{comment:CommentType}) => {
  return (<>
    <article className="py-6 px-4">
      <header onClick={(e) => e.stopPropagation()} className="mb-4">
        <div className="flex items-center justify-between">
          <Link to={`/${comment.account.username}`}>
            <div className="flex items-center">
              <Image
                src={comment.account.image || DefaultAvater}
                hash={comment.account.profile_image_hash}
                alt="User"
                className="w-10 h-10 rounded-full"
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
                  <span className="text-xs font-light">{comment.timestamp}</span>
                </span>
              </div>
            </div>
          </Link>
          
        </div>
      </header>
      <div>{comment.content}</div>
    </article><hr /></>
  );
}

export default Comment