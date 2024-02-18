import { UserDetailType } from "../types";
import useAxios from "../useAxios"

const Endpoints = () => {

    const api = useAxios();

    const getUserInfo = async (username:string):Promise<UserDetailType> => {
        const response = await api.get(`/accounts/user/${username}/`);
        return response.data
    }




    return {
        getUserInfo
    }


}

export default Endpoints
