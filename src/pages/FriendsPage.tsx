import FriendRequestCard from "../components/Partials/Account/FriendRequestCard";
import Loader from "../components/common/Loader";
import useFriendRequests from "../hooks/Account/useFriendRequests";
import useTopbar from "../hooks/useTopbar"

const FriendsPage = () => {
  useTopbar("Friends", true);
  const { isError, isPending, friend_requests } = useFriendRequests();
  
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
        <p>No friend requests found</p>
      </div>
    );
  } else {
    content = (
      <div className="p-4 grid grid-cols-1 gap-6">
        {friend_requests.map((request) => (
          <FriendRequestCard key={request.id} request={request} />
        ))}
      </div>
    );
  }



  return (
    <section className="py-8 px-4">
      <div>
        <h1 className="text-2xl">Pending friend requests</h1>
      </div>
      <div className="py-4">
      {content}
      </div>
    </section>
  )
}

export default FriendsPage
