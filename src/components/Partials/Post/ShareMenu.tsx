import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiShareForward2Fill } from "react-icons/ri";
import { FiLink } from "react-icons/fi";
const app_url = import.meta.env.VITE_APP_URL;
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { PostType } from "../../../hooks/types";
import { IoMdShareAlt } from "react-icons/io";

export default function ShareMenu({ post }: { post: PostType }) {
    function shareContent() {
        if (navigator.share) {
            // Check if the Web Share API is supported
            navigator
                .share({
                    title: `Post by ${post.account.name} (@${post.account.username}) on Waanverse`,
                    text: `Check out this post by ${post.account.name} (@${post.account.username}) on Waanverse`,
                    url: `${app_url}/posts/${post.id}`,
                })
                .then(() => {
                    console.log("Content shared successfully!");
                })
                .catch((error) => {
                    console.error("Failed to share content: ", error);
                });
        } else {
            toast.error(
                "Device does not support sharing content, copy link instead"
            );
        }
    }

    return (
        <>
            <div className="w-full text-right">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md p-2  text-gray-500 hover:bg-gray-900/10 focus:outline-none  focus-visible:ring-white/75">
                            <RiShareForward2Fill
                                className=" h-5 w-5"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute z-40 bottom-0 mb-8 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg  focus:outline-none">
                            <div>
                                <Menu.Item>
                                    <div>
                                        <CopyToClipboard
                                            onCopy={() => {
                                                toast.success(
                                                    "Link copied to clipboard"
                                                );
                                            }}
                                            text={`${app_url}/posts/${post.id}`}
                                        >
                                            <button
                                                className={
                                                    "dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 group  flex w-full items-center  px-2 py-3 text-sm"
                                                }
                                            >
                                                <FiLink
                                                    className="h-5 mr-2 w-5"
                                                    aria-hidden="true"
                                                />
                                                Copy link
                                            </button>
                                        </CopyToClipboard>
                                    </div>
                                </Menu.Item>
                                <hr className="border-gray-200 dark:border-gray-700  border-t h-px"/>
                                <Menu.Item>
                                    <button
                                        onClick={shareContent}
                                        className={
                                            "dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700  text-gray-700 group  flex w-full items-center  px-2 py-3 text-sm"
                                        }
                                    >
                                        <IoMdShareAlt
                                            className="h-5 mr-2 w-5"
                                            aria-hidden="true"
                                        />
                                        Share via ...
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}
