import { PostResponseType, PostType } from "../types";
import useAxios from "../useAxios";

export interface PostFormDataType {
    content: string;
    account: string;
    files?: Blob[] | File[]; // Updated to handle multiple files
    open_to: string;
    // taged_accounts: UserResponseType[];
}

const Endpoints = () => {
    const api = useAxios();

    //create a post

    const createPost = async (data: PostFormDataType) => {
        const formData = new FormData();
        formData.append("content", data.content);
        formData.append("account", data.account);
        formData.append("open_to", data.open_to);
        // formData.append("taged_accounts", JSON.stringify(data.taged_accounts));
        if (data.files) {
            data.files.forEach((file) => {
                formData.append(`files`, file);
            });
        }
        const response = await api.post("/compose/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    };

    //get All Posts
    const GetAllPosts = async (
        pageNum = 1,
        account?: string
    ): Promise<PostResponseType> => {
        let response;
        if (account) {
            response = await api.get(
                `/posts/?page=${pageNum}&account=${account}`
            );
        } else {
            response = await api.get(`/posts/?page=${pageNum}`);
        }

        return response.data;
    };

    //like a post
    const likePost = async (id: number, type: string) => {
        const response = await api.post(`/like/${id}/${type}/`);
        return response.data;
    };

    const dislikePost = async (id: number, type: string) => {
        const response = await api.post(`/unlike/${id}/${type}/`);
        return response.data;
    };

    //get Post by id
    const getPostById = async (id: number): Promise<PostType> => {
        const response = await api.get(`/post/${id}/`);
        return response.data;
    };

    return {
        createPost,
        GetAllPosts,
        likePost,
        dislikePost,
        getPostById,
    };
};

export default Endpoints;
