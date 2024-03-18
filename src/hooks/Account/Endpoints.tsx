import { FriendRequestType, HobbyType, UserResponseType, UserType } from "../types";
import useAxios from "../useAxios";

const Endpoints = () => {
    const api = useAxios();

    //get profile info

    const getUserInfo = async (username: string): Promise<UserType> => {
        const response = await api.get(`/accounts/user/${username}/`);
        return response.data;
    };

    // send friend request

    const sendFriendRequest = async (username: string) => {
        const response = await api.post(
            `/accounts/send-friend-request/${username}/`
        );

        return response.data;
    };

    //get friend requests
    const getFriendRequests = async (
        value?: number
    ): Promise<FriendRequestType[]> => {
        let response;
        if (value) {
            response = await api.get(
                `/accounts/friend-requests/?value=${value}`
            );
        } else {
            response = await api.get(`/accounts/friend-requests/`);
        }
        return response.data;
    };

    //accept friend request
    const acceptFriendRequest = async (requestId: number) => {
        const response = await api.post(
            `/accounts/accept-friend-request/${requestId}/`
        );
        return response.data;
    };

    //decline friend request
    const declineFriendRequest = async (requestId: number) => {
        const response = await api.post(
            `/accounts/decline-friend-request/${requestId}/`
        );
        return response.data;
    };

    //update profile info

    const updateProfileInfo = async (data: {
        name: string;
        bio: string;
        location: string;
        gender: string;
    }) => {
        const response = await api.post(`/accounts/update/info/`, data);
        return response.data;
    };

    //update profile Image

    const updateProfileImage = async (data: Blob) => {
        const formData = new FormData();
        formData.append("profile_image", data, "profile_image.webp");
        const response = await api.post("/accounts/update/image/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    };

    //get Hobbies

    const getHobbies = async (): Promise<HobbyType[]> => {
        const response = await api.get("/accounts/hobbies/");
        return response.data;
    };

    //update Hobbies

    const updateHobbies = async (data: number[]) => {
        const response = await api.post("/accounts/hobbies/update/", {
            hobbies: data,
        });
        return response.data;
    };

    //unfriend a person
    const unFriendAccount = async (username: string) => {
        const response =await api.post(`/accounts/unfriend/${username}/`)
        return response.data;
    }

    //get Friends
    const getFriends = async (pageNum=1,username:string): Promise<UserResponseType> => {
        const response = await api.get(`/accounts/friends/${username}/?page=${pageNum}`);
        return response.data;
    }

    return {
        getUserInfo,
        sendFriendRequest,
        getFriendRequests,
        acceptFriendRequest,
        declineFriendRequest,
        updateProfileInfo,
        updateProfileImage,
        getHobbies,
        updateHobbies,
        unFriendAccount,
        getFriends
    };
};

export default Endpoints;
