import ShareMenu from "./ShareMenu";
import ThumbDownIcon from "./ThumbDownIcon";
import ThumbUpIcon from "./ThumbUpIcon";

const PostFooter = () => {






  return (
      <div>
          <div className="flex items-center justify-between">
              <div className="grid grid-cols-2 gap-5">
                  <ThumbUpIcon className="dark:text-gray-200 text-gray-600 w-6 h-6" />

                  <ThumbDownIcon className="dark:text-gray-200 text-gray-600 w-6 h-6" />
              </div>
              <div>
                  <ShareMenu/>
              </div>
          </div>
      </div>
  );
}

export default PostFooter
