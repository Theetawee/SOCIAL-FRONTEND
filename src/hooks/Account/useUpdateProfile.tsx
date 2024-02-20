import { useMutation, useQueryClient } from "@tanstack/react-query";
import Endpoints from "./Endpoints"
import toast from "react-hot-toast";
import useModal from "../useModal";
import useAuth from "../Auth/useAuth";




const useUpdateProfile = (username:string) => {
    const client = useQueryClient();
    const { toggleModal} = useModal();
    const { setFastRefresh} = useAuth();
    const { updateProfileInfo,updateProfileImage} = Endpoints();

    const { mutateAsync:updateInfo, isPending} = useMutation({
        mutationFn: updateProfileInfo,
        mutationKey: ["updateProfileInfo"],
        onError: async () => {
            toast.error("Failed to update profile")
        },
        onSuccess: async () => {
            toast.success("Profile updated")
            setFastRefresh(true)
            toggleModal();
        },onSettled: async () => {
            await client.invalidateQueries({ queryKey: ["profile", username] })
        }
    })


    const {mutateAsync:updateImage,isPending:updatingImage,isSuccess} = useMutation({
        mutationFn: (data: Blob) => updateProfileImage(data),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["profile", username] }),
                client.invalidateQueries({ queryKey: ["profile"] }),
                setFastRefresh(true),
                toast.success("Profile image updated");
        },
        onError: () => {
            toast.error("Profile image update failed");
        },
    });

    return {
        updateInfo,
        isPending,
        updateImage,
        updatingImage,isSuccess
  }
}

export default useUpdateProfile
