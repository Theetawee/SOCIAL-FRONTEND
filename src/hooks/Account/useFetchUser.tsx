import { useQuery } from "@tanstack/react-query";
import Endpoints from "./Endpoints"

const useFetchUser = (username:string) => {

    const { getUserInfo } = Endpoints();


    const {data,isPending,isError } = useQuery({
        queryKey: ["userInfo", username],
        queryFn: () => getUserInfo(username),
    })


    return {
        profile: data,
        isLoading: isPending,
        isError: isError
}

}

export default useFetchUser
