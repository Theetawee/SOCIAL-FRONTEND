import useProfileActions from "../../../hooks/Account/useProfileActions";
import useAuth from "../../../hooks/Auth/useAuth";
import { UserType } from "../../../hooks/types";
import { IoIosPersonAdd } from "react-icons/io";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaHourglassHalf } from "react-icons/fa";
import useModal from "../../../hooks/useModal";
import LoginBtn from "../../common/LoginBtn";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const ProfileActionBtn = ({ profile }: { profile: UserType }) => {
  const { user, isAuthenticated } = useAuth();
  const { send_friend_request, unFriend_account, unfriending } =
    useProfileActions(profile.username);

  const isSelf = user?.username === profile.username && profile.is_self;

  const handleSendFriendRequest = async () => {
    await send_friend_request();
  };

  const handleUnfriend = async () => {
    await unFriend_account();
  };

  const { toggleModal } = useModal();

  let content;

  if (user && isAuthenticated) {
    if (isSelf) {
      content = (
        <>
          <button
            onClick={toggleModal}
            className="dark:bg-gray-900 bg-white text-gray-700 border dark:border-gray-700 border-gray-200 hover:bg-gray-50/40 rounded-md dark:hover:bg-gray-900/70 w-full max-w-52 dark:text-white px-3 py-2">
            Edit profile
          </button>
        </>
      );
    } else {
      if (profile.user_is_friend || profile.account_is_friend) {
        content = (
          <>
            <Button
              disabled={unfriending}
              onClick={handleUnfriend}
              className="focus:outline-none flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 font-medium rounded-full px-5 py-1.5 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-800"
              label="Unfriend"
            />
          </>
        );
      } else if (profile.account_sent_friend_request) {
        content = (
          <div>
            <p className="dark:text-gray-400 flex items-center text-gray-700 italic">
              <FaHourglassHalf className="mr-1 animate-pluse" />
              Sent a friend request
            </p>
            <Link
              className="text-sm text-primary-600 hover:underline"
              to="/friends">
              View requests
            </Link>
          </div>
        );
      } else if (profile.user_sent_friend_request) {
        content = (
          <div>
            <button className="dark:text-gray-400 flex items-center text-gray-700 italic ">
              <LiaUserClockSolid className="w-5 h-5 mr-1" />Friend Request sent
            </button>
          </div>
        );
      } else {
        content = (
          <button
            onClick={handleSendFriendRequest}
            className="text-white flex justify-center mx-auto items-center bg-primary-700 hover:bg-primary-800  focus:ring-primary-300 font-medium rounded-full text-sm px-3 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none ">
            <IoIosPersonAdd className="w-5 mr-1 h-5" /> Add friend
          </button>
        );
      }
    }
  } else {
    content = (
      <>
        <LoginBtn />
      </>
    );
  }
  return <div className="flex items-center justify-center   max-w-sm mx-auto">{content}</div>;
};

export default ProfileActionBtn;
