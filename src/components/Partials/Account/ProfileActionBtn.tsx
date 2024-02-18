import useProfileActions from "../../../hooks/Account/useProfileActions";
import useAuth from "../../../hooks/Auth/useAuth";
import { UserDetailType } from "../../../hooks/types"
import { IoIosPersonAdd } from "react-icons/io";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaHourglassHalf } from "react-icons/fa";

const ProfileActionBtn = ({ profile }: { profile: UserDetailType }) => {

    const { user } = useAuth();
    const {send_friend_request } = useProfileActions(profile.username);

    const isSelf = user?.username === profile.username && profile.is_self

    const handleSendFriendRequest = async () => {
        await send_friend_request()
    }



    let content;

    if(isSelf) {
        content = (
            <>
                <button className="dark:bg-gray-900 bg-white text-gray-700 border dark:border-gray-700 border-gray-200 hover:bg-gray-50/40 rounded-md dark:hover:bg-gray-900/70  w-full max-w-52 mx-auto dark:text-white px-3 py-2">
                    Edit profile
                </button>
            </>
        );
    } else {
        if (profile.user_is_friend) {
            content = (
                <>
                    <button>unfriend</button>
                </>
            )
        }
        else if (profile.account_is_friend) {
            content = (
                <>
                <button>Add to friend</button>
                </>
            )
        } else if (profile.account_sent_friend_request) {
            content = (
                <div>
                    <p className="text-lg flex items-center text-gray-600 italic">
                        <FaHourglassHalf className="mr-1"/>
                        Friend request pending
                    </p>
                    </div>
            )
        } else if (profile.user_sent_friend_request) {
            content = (
                <div>
                    <button className="text-white bg-gray-800  focus:outline-none mx-auto font-medium rounded-md text-sm px-3 py-2.5  dark:bg-gray-800 opacity-90 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center">
                        <LiaUserClockSolid className="w-5 h-5 mr-1" /> Request sent
                    </button>
                </div>
            );
        } else {
            content = (
                <button onClick={handleSendFriendRequest} className="text-white flex justify-center mx-auto items-center bg-primary-700 hover:bg-primary-800  focus:ring-primary-300 font-medium rounded-md text-sm px-3 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none ">
                    <IoIosPersonAdd className="w-5 mr-1 h-5"/> Add friend
                </button>
            );
        }
    }




  return (
      <div>
          {content}
      </div>
  );
}

export default ProfileActionBtn
