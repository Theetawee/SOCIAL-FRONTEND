import { JwtPayload } from "jwt-decode";

export interface UserType {
    username: string;
    email: string;
    name: string;
    image: string | null;
    image_hash: string;
    user_id: number;
    verified:boolean
}

export interface TokenData extends JwtPayload {
    user_id: number;
    username: string;
    email: string;
    name: string;
    image: string | null;
    image_hash: string;
    verified:boolean
}

export interface HobbyType {
    id: number;
    name: string;
}


export interface UserDetailType  {
    id: number;
    username: string;
    email: string;
    phone: string | null;
    gender: string | null;
    date_of_birth: string | null;
    image: string | null;
    bio: string | null;
    verified: boolean;
    name: string;
    profile_image_hash: string;
    location: string | null;
    badges: string[];
    joined: string;
    is_self: boolean;
    account_is_friend: boolean;
    user_is_friend: boolean;
    user_sent_friend_request: boolean;
    account_sent_friend_request: boolean;
    hobbies:HobbyType[]
}


export interface FriendRequestType{
    id: number;
    sender: UserDetailType
    recipient: UserDetailType
    status: string
    date_sent: string
}
