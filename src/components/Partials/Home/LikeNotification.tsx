import { FaHeart } from "react-icons/fa6";
import { NotificationType } from "../../../hooks/types";
import useDate from "../../../hooks/useDate";
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/default.webp";
import { Link, useNavigate } from "react-router-dom";
import VerifiedSvg from "../Account/VerifiedSvg";

const LikeNotification = ({
  notification,
}: {
  notification: NotificationType;
}) => {
  const navigate = useNavigate();
  const { naturalDay } = useDate();
  return (
    <div
      onClick={() => navigate(`/posts/${notification.post}`)}
      className="flex cursor-pointer items-center justify-between relative gap-x-4 p-4 border border-gray-300 dark:border-gray-800 rounded-md mb-4">
      {!notification.seen && (
        <span className="w-2 h-2 bg-primary-600 absolute -top-1 z-10 -right-1 rounded-full"></span>
      )}
      <div className="flex items-center gap-x-3">
        <div onClick={(e) => e.stopPropagation()}>
          <Link to={`/${notification.from_user.username}`}>
            <Image
              hash={notification.from_user.profile_image_hash}
              className="w-10 h-10 rounded-full"
              alt={"User"}
              src={notification.from_user.image || DefaultAvater}
            />
          </Link>
        </div>
        <div>
          <p className="text-sm dark:text-gray-200 font-medium text-gray-800">
            <Link
              to={`/${notification.from_user.username}`}
              className="flex items-center text-lg">
              <span className="font-bold">
                @{notification.from_user.username}
              </span>
              {notification.from_user.verified && <VerifiedSvg />}
            </Link>
            liked your post{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center justify-center">
          <FaHeart className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <p className="text-xs italic dark:text-gray-200 font-medium text-gray-800">
            {naturalDay(notification.created_at)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeNotification;
