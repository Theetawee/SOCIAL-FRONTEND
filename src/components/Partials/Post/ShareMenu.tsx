import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiShareForward2Fill } from "react-icons/ri"; import { FiLink } from "react-icons/fi"; import { MdOutlineReport } from "react-icons/md";
const app_url = import.meta.env.VITE_APP_URL;
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";






export default function ShareMenu({postId}:{postId:number}) {


    return (
        <>
            <div className="w-full text-right">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md p-2 dark:text-white text-gray-700 hover:bg-gray-900/10 focus:outline-none  focus-visible:ring-white/75">
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
                        <Menu.Items className="absolute z-40 bottom-0 mb-8 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg p-1 focus:outline-none">
                            <div>
                                <Menu.Item>
                                    <div>
                                    <CopyToClipboard onCopy={()=>{toast.success("Link copied to clipboard")}} text={`${app_url}/post/${postId}`}>
                                    <button

                                        className={
                                            "dark:text-white  text-gray-700 group  flex w-full items-center rounded-md px-2 py-2 text-sm"
                                        }
                                    >
                                        <FiLink
                                            className="h-5 mr-2 w-5"
                                            aria-hidden="true"
                                        />
                                        Copy link
                                        </button>
                                    </CopyToClipboard></div>
                                </Menu.Item><hr/>
                                <Menu.Item>
                                    <button
                                        className={
                                            "dark:text-white  text-gray-700 group  flex w-full items-center rounded-md px-2 py-2 text-sm"
                                        }
                                    >
                                        <MdOutlineReport
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
