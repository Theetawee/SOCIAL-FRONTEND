/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { PostFormDataType } from "../types";
import { toast } from "react-hot-toast";
import Endpoints from "./Endpoints";



const useCompose = (user_id: number) => {
    const navigate = useNavigate();
    const [files, setFiles] = useState<string[]>([]);
    const [data, setData] = useState<PostFormDataType>({
        content: "",
        account: user_id.toString(),
        files: undefined,
        taged_accounts: [],
    });

    const [imageList, setImageList] = useState<FileList>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (!selectedFiles) return;
        setImageList(selectedFiles);
        const fileUrls: string[] = [];

        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            const fileUrl = URL.createObjectURL(file);
            fileUrls.push(fileUrl);
        }

        setFiles(fileUrls);
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    const cancelPreview = (file: string) => {
        const index = files.indexOf(file);

        setFiles((prev) => prev?.filter((f) => f !== file));

        // Convert FileList to array
        if (!imageList) return;
        const imageArray = Array.from(imageList);

        // Create a new array excluding the item at the specified index
        const newImages = [
            ...imageArray.slice(0, index),
            ...imageArray.slice(index + 1),
        ];

        const dataTransfer = new DataTransfer();

        newImages.forEach((file) => {
            dataTransfer.items.add(file);
        });

        const fileList = dataTransfer.files;

        setImageList(fileList);
    };

    const queryClient = useQueryClient();
    const { createPost} = Endpoints();
    

    
    const newPostMutation = useMutation({
        mutationFn: () => createPost(data),
        onSuccess: (post: any) => {
            toast.success("Post published successfully!");
            queryClient.setQueryData(["post", post.id], post);
            queryClient.invalidateQueries({ queryKey: ["post"], exact: true });
            
                navigate("/home");
            
        },
        onError: () => {
            toast.error("Something went wrong! Couldn't publish your post.");
        },
    });

    const { isPending, mutate } = newPostMutation;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const taged=formData.get("mentioned_users");
        const taged_accounts:string[]=JSON.parse(taged as string);

        const content = formData.get("content") as string;

        // Retrieve all files for the "file" key
        const filesData = imageList;
        const filesArray: File[] = [];

        if (filesData) {
            for (const fileData of filesData) {
                if (fileData instanceof File) {
                    filesArray.push(fileData);
                }
            }
        }

        setData({
            content,
            account: user_id.toString(),
            files: filesArray,
            taged_accounts: taged_accounts,
        })

           
        


            mutate();
        
    };


    


    return {
        isPending,
        cancelPreview,
        handleChange,
        handleSubmit,
        files,
        setFiles,
        inputRef,
    };
};

export default useCompose;
