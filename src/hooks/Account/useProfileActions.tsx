import { useMutation, useQueryClient } from "@tanstack/react-query";
import Endpoints from "./Endpoints"
import { UserDetailType } from "../types";


interface ErrorType {
    previousProfile: UserDetailType;
}

const useProfileActions = (username:string) => {

    const client = useQueryClient();
    const { sendFriendRequest} = Endpoints();

    const {mutateAsync:send_friend_request,isPending:sending_friend_request } = useMutation({
        mutationFn: () => sendFriendRequest(username),
        mutationKey: ["sendFriendRequest", username],
        onMutate: async () => {
            await client.cancelQueries({
                queryKey: ["profile",username],
            })
            const previousProfile = client.getQueryData(["profile", username]);
            client.setQueryData(
                ["profile", username],
                (old: UserDetailType) => ({
                    ...old,
                    user_sent_friend_request: true,
                })
            );
            return { previousProfile };

        },onError: (context: ErrorType) => {
            client.setQueryData(["profile", username], context.previousProfile);
        },
        onSettled: async () => {
            await client.invalidateQueries({ queryKey: ["profile", username] });
        },
    })


    return {
        send_friend_request,
        sending_friend_request
  }
}

export default useProfileActions
