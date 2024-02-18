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


export interface UserDetailType extends UserType{
    bio:string
}
