import { useMutation, useQueryClient } from "@tanstack/react-query";
import Endpoints from "./Endpoints";
import { UserType } from "../types";
import toast from "react-hot-toast";

interface ErrorType {
    previousProfile: UserType;
}

const useProfileActions = (username: string) => {
    const client = useQueryClient();
    const { sendFriendRequest, acceptFriendRequest, declineFriendRequest,unFriendAccount } =
        Endpoints();

    const {
        mutateAsync: send_friend_request,
        isPending: sending_friend_request,
    } = useMutation({
        mutationFn: () => sendFriendRequest(username),
        mutationKey: ["sendFriendRequest", username],
        onMutate: async () => {
            await client.cancelQueries({
                queryKey: ["profile", username],
            });
            const previousProfile = client.getQueryData(["profile", username]);
            client.setQueryData(["profile", username], (old: UserType) => ({
                ...old,
                user_sent_friend_request: true,
            }));
            return { previousProfile };
        },
        onError: (context: ErrorType) => {
            client.setQueryData(["profile", username], context.previousProfile);
        },
        onSettled: async () => {
            await client.invalidateQueries({ queryKey: ["profile", username] });
        },
    });

    const {
        mutateAsync: accept_friend_request,
        isPending: accepting_friend_request,
        isError: accepting_friend_request_error,
    } = useMutation({
        mutationFn: (requestId: number) => acceptFriendRequest(requestId),
        mutationKey: ["acceptFriendRequest", username],
        onSuccess: async () => {
            await client.invalidateQueries({ queryKey: ["friend_requests"] });
            toast.success("Friend request accepted");
        },
        onError: async () => {
            toast.error("Failed to accept friend request");
        },
    });

    const {
        mutateAsync: decline_friend_request,
        isPending: declining_friend_request,
        isError: declining_friend_request_error,
    } = useMutation({
        mutationFn: (requestId: number) => declineFriendRequest(requestId),
        mutationKey: ["declineFriendRequest", username],
        onSuccess: async () => {
            await client.invalidateQueries({ queryKey: ["friend_requests"] });
            toast.success("Friend request declined");
        },
        onError: async () => {
            toast.error("Failed to decline friend request");
        },
    });

    const { mutateAsync: unFriend_account, isPending:unfriending,isError:unfriend_error} = useMutation({
        mutationFn: () => unFriendAccount(username),
        mutationKey: ["unFriendAccount", username],
        onSuccess: async () => {
            await client.invalidateQueries({ queryKey: ["profile", username] });
            toast.success("Unfriended account");
        },
        onError: async () => {
            toast.error("Failed to unfriend");
        },
    })

    return {
        send_friend_request,
        sending_friend_request,
        accepting_friend_request,
        accepting_friend_request_error,
        accept_friend_request,
        decline_friend_request,
        declining_friend_request,
        declining_friend_request_error,
        unFriend_account,unfriending,unfriend_error
    };
};

export default useProfileActions;
