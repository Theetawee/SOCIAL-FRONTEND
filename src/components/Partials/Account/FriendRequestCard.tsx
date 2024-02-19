import { Link } from "react-router-dom";
import DefaultAvatar from "../../../assets/default.webp";
import { FriendRequestType } from "../../../hooks/types";
import useDate from "../../../hooks/useDate";
import useProfileActions from "../../../hooks/Account/useProfileActions";
import Loader from "../../common/Loader";






const FriendRequestCard = ({ request }: { request: FriendRequestType }) => {
  const { naturalDay } = useDate();
  const { accept_friend_request, accepting_friend_request,decline_friend_request,declining_friend_request } = useProfileActions(request.sender.username);

  const handleAccept=async()=>{
    await accept_friend_request(request.id)
  }

  const handleDecline=async()=>{
    await decline_friend_request(request.id)
  }







    return (
      <div className="pb-2">
        <div className="flex items-center justify-between">
          <Link to={`/${request.sender.username}`} className="block">
            <div className="flex items-center">
                <div>
                    <img
                        src={DefaultAvatar}
                        alt="User"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium">{request.sender.name}</h3>
                    <p className="text-sm text-gray-500">@{request.sender.username}</p>
                </div>
            </div>
            </Link>
          <span className="text-xs  italic ">
            {naturalDay(request.date_sent)}
          </span>
          </div>
            <div className="mt-4 flex gap-x-3 items-center">
                <button onClick={handleAccept} disabled={accepting_friend_request||declining_friend_request} className="bg-primary-600  text-white rounded-full text-sm py-1.5 px-5">
                  {accepting_friend_request ? (<Loader fill="white"/>) : "Accept"}
                </button>
                <button onClick={handleDecline} disabled={accepting_friend_request||declining_friend_request} className="bg-red-600 text-white rounded-full py-1.5 text-sm px-5">
                  {declining_friend_request ? (<Loader fill="white"/>) : "Decline"}
                </button>
            </div>
        </div>
    );
};

export default FriendRequestCard;
