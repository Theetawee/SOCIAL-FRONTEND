import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {BsThreeDotsVertical} from "react-icons/bs"
import { MdOutlineReport } from "react-icons/md";
import useAuth from "../../../hooks/Auth/useAuth";
import { PostType } from '../../../hooks/types';
import Endpoints from "../../../hooks/Posts/Endpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


const HeaderMenu=({post}:{post:PostType})=> {
    const { user } = useAuth();
    
    const { deletePost} = Endpoints();

    const client = useQueryClient();

    const { mutateAsync} = useMutation({
        mutationFn: (id: number) => deletePost(id),
        mutationKey: ["deletePost"],
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["posts"] });
            toast.success("Post Deleted Successfully");
            
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    })



    const handleDeletePost =async () => {
        await mutateAsync(post.id);
    }


    return (
      <>
        <div className=" text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md p-2 dark:text-white text-gray-700 hover:bg-gray-900/10 focus:outline-none  focus-visible:ring-white/75">
                <BsThreeDotsVertical className=" h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute z-30 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 rounded-md bg-white dark:bg-gray-800 shadow-lg  focus:outline-none">
                {post.account.id === user?.id ? (
                  <div className="px-1 py-1 border border-gray-100 dark:border-gray-700 rounded-md">
                    <Menu.Item>
                      {({ active }) => (
                                            <button
                                                onClick={handleDeletePost}
                          className={`${
                            active
                              ? "dark:bg-gray-800 bg-gray-50 dark:text-white text-gray-700"
                              : "dark:text-white text-gray-700"
                          } group  flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                          <MdOutlineReport
                            className="h-5 mr-2 w-5"
                            aria-hidden="true"
                          />
                          Delete Post
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ) : (
                  <div className="px-1 py-1 border border-gray-100 dark:border-gray-700 rounded-md">
                    <Menu.Item>
                      <button
                        className={
                          "dark:text-white text-gray-700 group  flex w-full items-center rounded-md px-2 py-2 text-sm"
                        }>
                        <MdOutlineReport
                          className="h-5 mr-2 w-5"
                          aria-hidden="true"
                        />
                        Report Post
                      </button>
                    </Menu.Item>
                  </div>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </>
    );
}

export default HeaderMenu;