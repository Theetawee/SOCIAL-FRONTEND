import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaShareAlt } from "react-icons/fa";import { MdOutlineReport } from "react-icons/md";

export default function ShareMenu() {
    return (
        <>
            <div className="w-full text-right">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md p-2 dark:text-white text-gray-700 hover:bg-gray-900/10 focus:outline-none  focus-visible:ring-white/75">
                            <FaShareAlt
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
                        <Menu.Items className="absolute  bottom-0 mb-8 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg  focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active
                                                    ? "dark:bg-gray-800 bg-gray-50 dark:text-white text-gray-700"
                                                    : "dark:text-white  text-gray-700"
                                            } group  flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            <MdOutlineReport
                                                className="h-5 mr-2 w-5"
                                                aria-hidden="true"
                                            />
                                            Share
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}
