import { CommentResponseType, ImageDataType, PostFormDataType, PostResponseType, PostType, SuggestedAccount } from "../types";
import useAxios from "../useAxios";


const Endpoints = () => {
    const api = useAxios();

    //create a post

    const createPost = async (data: PostFormDataType) => {
        const formData = new FormData();
        formData.append("content", data.content);
        formData.append("account", data.account);
        formData.append("taged_accounts", JSON.stringify(data.taged_accounts));
        if (data.files) {
            data.files.forEach((file) => {
                formData.append(`files`, file);
            });
        }
        const datas = Object.fromEntries(formData)
        console.log(datas)
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


    //get post images
    const   getPostImages = async (id: number):Promise<ImageDataType[]> => {
        const response = await api.get(`/post/images/${id}`);
        return response.data;
    }

    //get Tag Suggestions
    const getTagSuggestions = async (account: string): Promise<SuggestedAccount[]> => {

        if(account === "") return [];
        const response = await api.get(`/s/accounts/?account=${account}`);
        return response.data;
    }


    //get Post Comments

    const getPostComments = async (id: number,pageParam=1): Promise<CommentResponseType> => {
        const response = await api.get(`/post/comments/${id}?page=${pageParam}`);
        return response.data;
    }


    return {
        createPost,
        GetAllPosts,
        likePost,
        dislikePost,
        getPostById,
        getPostImages,
        getTagSuggestions,
        getPostComments
    };
};

export default Endpoints;
