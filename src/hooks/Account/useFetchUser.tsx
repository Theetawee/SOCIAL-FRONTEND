import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Endpoints from "./Endpoints"
import toast from "react-hot-toast";

const useFetchUser = (username:string) => {

    const { getUserInfo, getHobbies, updateHobbies } = Endpoints();

    const client=useQueryClient();


    const {data,isPending,isError } = useQuery({
        queryKey: ["profile", username],
        queryFn: () => getUserInfo(username),
    })

    const {data:hobbies,isPending:isHobbiesPending,isError:isHobbiesError } = useQuery({
        queryKey: ["hobbies"],
        queryFn: () => getHobbies(),
    })

    const {mutateAsync:update_hobbies,isPending:isHobbiesUpdating,isSuccess}=useMutation({
        mutationFn: (data: number[]) => updateHobbies(data),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["profile", username] });
            toast.success("Hobbies updated");

        },
        onError: () => {
            toast.error("Failed to update hobbies");
        },

    })


    return {
        profile: data,
        isLoading: isPending,
        isError: isError,
        hobbies: hobbies,
        isHobbiesLoading: isHobbiesPending,
        isHobbiesError: isHobbiesError,
        update_hobbies,
        isHobbiesUpdating,isSuccess


}

}

export default useFetchUser
