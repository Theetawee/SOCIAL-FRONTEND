import { PostType } from "../../hooks/types";
import { Link } from "react-router-dom";

interface Props{
    post: PostType;
}

const PostBody = ({post}: Props) => {
  return (
    <main className="pl-12">
        <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">{post.content}</p>
        {post.taged_accounts && post.taged_accounts.length !== 0 && (
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {post.taged_accounts.map((account) => (
                <div key={account.id} onClick={(e) => e.stopPropagation()}>
                  <Link
                    to={`/${account.username}`}
                    className="flex text-sm text-primary-600 items-center"
                  >
                    <p>@{account.username}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
    </main>
  );
};

export default PostBody;
