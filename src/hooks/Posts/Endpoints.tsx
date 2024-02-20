import useAxios from "../useAxios"


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




    return {
      createPost
  }
}

export default Endpoints
