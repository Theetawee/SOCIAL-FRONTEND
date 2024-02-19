import { Link } from "react-router-dom"
import FriendRequestCard from "../Account/FriendRequestCard"
import useFriendRequests from "../../../hooks/Account/useFriendRequests";
import Loader from "../../common/Loader";

const FriendRequest = () => {
    const { isPending, friend_requests, isError } = useFriendRequests();

    let content;
    if (isPending) {
        content = (
            <Loader/>
        )
    }else if(isError){
        content = (
            <div>
                <p>Unable to fetch data!</p>
            </div>
        )
    } else if (friend_requests?.length === 0) {
        content = (
            <div>
                <p>No friend requests</p>
            </div>
        )
    }else{
        content = (
            <div>
                {friend_requests?.map((request) => {
                    return (
                        <FriendRequestCard key={request.id} request={request} />
                    )
                })}
            </div>
        )

    }



  return (
      <section className={`${friend_requests?.length === 0 ? "hidden" : ""}`}>
          <div className="w-full bg-white rounded-lg  shadow">
              <div className="flex p-4 items-center justify-between">
                  <h2>Friend requests</h2>
                  <div>
                      <Link to={"/"} className="text-primary-500 font-medium">
                          See all
                      </Link>
                  </div>
              </div>
              <hr />
              <div className="p-4 grid grid-cols-1 gap-6">
                  {content}
              </div>
          </div>
      </section>
  );
}

export default FriendRequest
