import Image from "../components/common/Image";
import useAuth from "../hooks/Auth/useAuth";
import { lazy } from "react";
import DefaultAvater from "../assets/default.webp";
import { Link } from "react-router-dom";
const SideBarLink=lazy(()=>import("./SideBarLink"))
import { FaUserFriends, FaUser, FaSignOutAlt } from "react-icons/fa";
import Switch from "../components/common/Switch";
import VerifiedSvg from "../components/Partials/Account/VerifiedSvg";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import { GoHomeFill } from "react-icons/go";

const Aside = () => {
    const { user } = useAuth();

    return (
        <section className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-gray-50/20 dark:bg-gray-800 border border-gray-100 dark:border-gray-900 rounded-md shadow-sm">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to={`/${user?.username}`} className="block">
                                <Image
                                    src={user?.image || DefaultAvater}
                                    hash={user?.profile_image_hash}
                                    alt={user?.name || "user image"}
                                    className="w-12 h-12 rounded-full"
                                />
                            </Link>
                            <Link to={`/${user?.username}`} className="block">
                                <div className="ml-3  flex flex-col">
                                    <div className="flex items-center">
                                        <p className="text-lg font-medium max-w-36 truncate"> {user?.name}</p>
                                        {user?.verified && (
                                            <span>
                                                <VerifiedSvg />
                                            </span>
                                        )}
                                    </div>
                                    <p className="leading-3 truncate max-w-32">
                                        @{user?.username}
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <Switch />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SuspenseLoader className="h-auto">
                    <SideBarLink icon={GoHomeFill} path="/home" label="Home" />
                    <SideBarLink
                        icon={FaUser}
                        path={`/${user?.username}`}
                        label="Profile"
                    />
                </SuspenseLoader>
                <SuspenseLoader className="h-auto">
                    <SideBarLink
                        icon={FaUserFriends}
                        path="/friends"
                        label="Find Friends"
                    />
                </SuspenseLoader>
                <SuspenseLoader className="h-auto">
                    <SideBarLink
                        icon={FaSignOutAlt}
                        path="/logout"
                        label="Logout"
                    />
                </SuspenseLoader>
                <Link
                    to={"/compose"}
                    className=" bg-primary-600 text-white p-3 w-[80%] mx-auto mt-20 text-lg font-medium rounded-full flex items-center justify-center"
                >
                    Compose
                </Link>
            </div>
        </section>
    );
};

export default Aside;
