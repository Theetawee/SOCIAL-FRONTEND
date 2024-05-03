import { PostType } from "../../hooks/types";
import utils from "../../hooks/utils";
import AccountName from "../Account/AccountName";
import Image from "../common/Image";

const PostHeader = ({ post }: { post: PostType }) => {
  const {DefaultAvater}=utils();
  return (
    <header className="flex items-start gap-x-2">
      <div>
        <Image
          className="inline-block h-9 w-9 rounded-full"
          src={
            post.account.image ||DefaultAvater
          }
          alt={post.account.name}
        />
      </div>
      <div className="grid grid-cols-1">
        <div className="flex items-center gap-x-1">
          <AccountName name={post.account.name} verified={post.account.verified} />
          <span className="w-0.5 h-0.5 rounded-full bg-gray-700"></span>
          <p className="text-gray-600 dark:text-gray-400 text-sm">@{post.account.username}</p>
        </div>

        <p className="text-gray-600 dark:text-gray-500 text-xs">{post.creation_date}</p>
      </div>
    </header>
  );
};

export default PostHeader;
