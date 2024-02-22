import { Link } from "react-router-dom";
import FriendRequestCard from "../Account/FriendRequestCard";
import useFriendRequests from "../../../hooks/Account/useFriendRequests";
import Loader from "../../common/Loader";

const FriendRequest = () => {
    const { isPending, friend_requests, isError } = useFriendRequests();

    let content;
    if (isPending) {
        content = <Loader />;
    } else if (isError) {
        content = (
            <div>
                <p>Unable to fetch data!</p>
            </div>
        );
    } else if (!friend_requests || friend_requests.length === 0) {
        content = (
            <div>
                <p>No friend requests</p>
            </div>
        );
    } else {
        content = (
            <div className="p-4 grid grid-cols-1 gap-4">
                {friend_requests.map((request) => (
                    <FriendRequestCard key={request.id} request={request} />
                ))}
            </div>
        );
    }

    return (
        <section
            className={`${
                !friend_requests || friend_requests.length === 0 ? "hidden" : ""
            }`}
        >
            <div className="w-full bg-white dark:bg-gray-800 rounded-lg  shadow">
                <div className="flex p-4 items-center justify-between">
                    <h2>Friend requests</h2>
                    <div>
                        <Link to={"/"} className="text-primary-500 font-medium">
                            See all
                        </Link>
                    </div>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <div >{content}</div>
            </div>
        </section>
    );
};

export default FriendRequest;
