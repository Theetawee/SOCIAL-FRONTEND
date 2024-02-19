import { FriendRequestType, UserDetailType } from "../types";
import useAxios from "../useAxios"

const Endpoints = () => {

    const api = useAxios();


    //get profile info

    const getUserInfo = async (username:string):Promise<UserDetailType> => {
        const response = await api.get(`/accounts/user/${username}/`);
        return response.data
    }

    // send friend request

    const sendFriendRequest = async (username: string) => {
        const response = await api.post(`/accounts/send-friend-request/${username}/`)

        return response.data
    }

    //get friend requests
    const getFriendRequests = async ():Promise<FriendRequestType[]> => {
        const response = await api.get(`/accounts/friend-requests/`)
        return response.data
    }



    return {
        getUserInfo,
        sendFriendRequest,
        getFriendRequests
    }


}

export default Endpoints
