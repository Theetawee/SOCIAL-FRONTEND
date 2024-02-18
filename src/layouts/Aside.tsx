import Image from "../components/common/Image";
import useAuth from "../hooks/Auth/useAuth";
import DefaultAvater from "../assets/default.webp";
import { Link } from "react-router-dom";
import SideBarLink from "./SideBarLink";
import { FaUserFriends, FaUser, FaSignOutAlt } from "react-icons/fa";
import Switch from "../components/common/Switch";
import VerifiedSvg from "../components/Partials/Account/VerifiedSvg";
const Aside = () => {
    const { user } = useAuth();

    return (
        <section className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-gray-50/20 dark:bg-gray-800 rounded-md shadow-sm">
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to={`/${user?.username}`} className="block">
                                <Image
                                    src={user?.image || DefaultAvater}
                                    hash={user?.image_hash}
                                    alt={user?.name || "user image"}
                                    className="w-12 h-12 rounded-full"
                                />
                            </Link>
                            <Link to={`/${user?.username}`} className="block">
                                <div className="ml-3  flex flex-col">
                                    <p className="text-lg flex items-center font-medium">
                                        {user?.name}
                                        {user?.verified && (
                                            <span>
                                                <VerifiedSvg />
                                            </span>)}
                                    </p>
                                    <p className="leading-3">
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
                <SideBarLink icon={FaUser} path={`/${user?.username}`} label="Profile" />
                <SideBarLink
                    icon={FaUserFriends}
                    path="/friends"
                    label="Find Friends"
                />
                <SideBarLink
                    icon={FaSignOutAlt}
                    path="/logout"
                    label="Logout"
                />
            </div>
        </section>
    );
};

export default Aside;
