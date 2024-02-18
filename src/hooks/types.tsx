import { JwtPayload } from "jwt-decode";

export interface UserType {
    username: string;
    email: string;
    name: string;
    image: string | null;
    image_hash: string;
    user_id: number;
}

export interface TokenData extends JwtPayload {
    user_id: number;
    username: string;
    email: string;
    name: string;
    image: string | null;
    image_hash: string;
}

export interface CollectionType {
    id: number;
    name: string;
    divider: number | null;
    total: number;
}

export interface TransactionType {
    id: number;
    amount: number;
    transaction_type: string;
    timestamp: string;
    collection: CollectionType;
}

export interface TopBarContextType {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    back: boolean;
    setBack: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface UserDetailType extends UserType{
    bio:string
}
