import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IoImage } from "react-icons/io5";
import Endpoints from "../../../hooks/Posts/Endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/Auth/useAuth";
import Select from "../../common/Select";
import Loader from "../../common/Loader";
const WhatsOnYourMind = () => {
    const { createPost } = Endpoints();
    const client = useQueryClient();
    const { user } = useAuth();
    const formRef = useRef<HTMLFormElement>(null);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            toast.success("Post created successfully");
            client.invalidateQueries({ queryKey: ["posts"] });
            setText("");
            formRef.current?.reset();
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    });

    const [text, setText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const open_to = e.currentTarget.open_to.value;
        const data = {
            content: text,
            account: user?.user_id.toString() || "",
            open_to: open_to,
        };
        if (text.trim() !== "") {
            mutateAsync(data);
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit} className="w-full">
            <div className="border-gray-100 dark:border-gray-800 border-b p-4 grid grid-cols-1 gap-4 dark:bg-gray-900 bg-white">
                <div className="flex items-center gap-6">
                    <p className="font-medium">Who can see post</p>
                    <div className="max-w-40">
                        <Select
                            className="px-4 py-1.5  text-sm"
                            disabled={isPending}
                            name="open_to"
                            label="Who can see your post"
                            required
                            defaultValue="E"
                            options={[
                                { label: "Everyone", value: "E" },
                                { label: "Friends", value: "AF" },
                                { label: "Followers", value: "F" },
                                { label: "Only me", value: "O" },
                            ]}
                        />
                    </div>
                </div>

                <textarea
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none"
                    rows={4}
                    placeholder="What's on your mind?"
                    value={text}
                    required
                    onChange={handleChange}
                ></textarea>
                <input type="file" className="hidden" id="File" />
                <div className="flex w-full items-center justify-between">
                    <button
                        disabled={isPending}
                        className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-600/90 transition-colors"
                        type="submit"
                    >
                        {isPending ? <Loader /> : "Post"}
                    </button>
                    <div>
                        <label htmlFor="File" className="p-2 cursor-pointer">
                            <IoImage className="w-6 h-6" />
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default WhatsOnYourMind;
