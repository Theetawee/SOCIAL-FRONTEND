/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { CommentFormDataType } from "../types";
import { toast } from "react-hot-toast";
import Endpoints from "./Endpoints";

const useCreateComment = (user_id: number,postId:number) => {
  const [files, setFiles] = useState<string[]>([]);
  const [data, setData] = useState<CommentFormDataType>({
    content: "",
    account: user_id.toString(),
    files: undefined,
    post: "",
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
  const { createComment } = Endpoints();


  
  const newCommentMutation = useMutation({
    mutationFn: () => createComment(data),
    onSuccess: () => {
      toast.success("Comment published successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments",postId]});
      
    },
    onError: () => {
      toast.error("Something went wrong! Couldn't publish your post.");
    },
  });

  const { isPending, mutate,isSuccess } = newCommentMutation;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
      const postId = formData.get("post") as string;
    

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
        post: postId,
      });
    
    mutate();
  };

  return {
      isPending,
      
    cancelPreview,
    handleChange,
    handleSubmit,
    files,
      setFiles,
    isSuccess,
    inputRef,
  };
};

export default useCreateComment;
