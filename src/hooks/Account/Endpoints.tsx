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
    const getFriendRequests = async (value?: number): Promise<FriendRequestType[]> => {
        let response
        if (value) {
            response = await api.get(`/accounts/friend-requests/?value=${value}`)
        }
        else {
            response = await api.get(`/accounts/friend-requests/`)
        }
        return response.data
    }

    //accept friend request
    const acceptFriendRequest = async (requestId: number) => {
        const response = await api.post(`/accounts/accept-friend-request/${requestId}/`)
        return response.data
    }



    return {
        getUserInfo,
        sendFriendRequest,
        getFriendRequests,
        acceptFriendRequest
    }


}

export default Endpoints
