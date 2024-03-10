
export interface HobbyType {
    id: number;
    name: string;
}


export interface UserType  {
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
    sender: UserType
    recipient: UserType
    status: string
    date_sent: string
}

export interface ImageDataType {
    content_image: string;
    image_hash: string;
    id: number;
}

interface PostAccountType{
    username: string
    id: number
    name: string
    image: string | null
    profile_image_hash: string
    verified: boolean
}

interface BaseStructure {
    content: string;
    account: PostAccountType;
    timestamp: string;
    updated_at: string;
    total_likes: number;
    views: number;
    id: number;
    is_liked: boolean;
    is_disliked: boolean;
    post_images: ImageDataType[];
    taged_accounts: PostAccountType[];
}

export interface PostType extends BaseStructure {
    total_comments: number;
    
}

export interface TagedAccount{
    id: number,
    username:string
}

export interface PostResponseType {
    next: number | null;
    previous: number | null;
    count: number;
    results: PostType[];
}

export interface CommentResponseType{
    next: number | null;
    previous: number | null;
    count: number;
    results: BaseStructure[]
}

export interface UserResponseType {
    next: number | null;
    previous: number | null;
    count: number;
    results: UserType[];
}


export interface PostFormDataType {
    content: string;
    account: string;
    files?: Blob[] | File[];
    taged_accounts: string[];
}


export interface CommentFormDataType {
  content: string;
  account: string;
  files?: Blob[] | File[];
    post: string;
}


export interface CommentType extends BaseStructure{

}


export interface SuggestedAccount{
    username: string
    image: string | null;
    name: string;
    verified: boolean;
    id: number;
    profile_image_hash: string;


}

export interface SearchResultsType{
    accounts: SuggestedAccount[];
    posts: PostType[]
}