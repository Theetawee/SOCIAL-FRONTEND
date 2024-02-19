import { useMutation, useQueryClient } from "@tanstack/react-query";
import Endpoints from "./Endpoints"
import toast from "react-hot-toast";
import useModal from "../useModal";




const useUpdateProfile = (username:string) => {
    const client = useQueryClient();
    const { toggleModal} = useModal();

    const { updateProfileInfo} = Endpoints();

    const { mutateAsync:updateInfo, isPending} = useMutation({
        mutationFn: updateProfileInfo,
        mutationKey: ["updateProfileInfo"],
        onError: async () => {
            toast.error("Failed to update profile")
        },
        onSuccess: async () => {
            toast.success("Profile updated")
            toggleModal();
        },onSettled: async () => {
            await client.invalidateQueries({ queryKey: ["profile", username] })
        }
    })

    return {
        updateInfo,
        isPending
  }
}

export default useUpdateProfile
