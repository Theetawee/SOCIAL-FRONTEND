import { Link } from "react-router-dom";
import FriendRequestCard from "../Partials/Account/FriendRequestCard";
import useFriendRequests from "../../hooks/Account/useFriendRequests";
import Loader from "../common/Loader";

const HomeSidebar = () => {
  const { isPending, friend_requests, isError } = useFriendRequests(3);

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
      } py-2`}>
      <div className="w-full rounded-lg  shadow">
        <div className="flex p-2.5 items-center justify-between">
          <h2 className="text-xl">Friend requests</h2>
          <Link to={"/friends"} className="text-primary-500 font-medium">
            See all
          </Link>
        </div>

        <div>{content}</div>
      </div>
    </section>
  );
};

export default HomeSidebar;
