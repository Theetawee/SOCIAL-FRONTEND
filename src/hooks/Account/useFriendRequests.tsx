import { useQuery } from "@tanstack/react-query";
import Endpoints from "./Endpoints";

const useFriendRequests = () => {

    const { getFriendRequests} = Endpoints();

    const {data:friend_requests,isPending,isError}=useQuery({
        queryKey: ["friend_requests"],
        queryFn:getFriendRequests,
    })

    return {
        friend_requests, isPending,isError
  }
}

export default useFriendRequests
