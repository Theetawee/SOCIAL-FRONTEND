import DefaultAvater from "../assets/default.webp";
import Image from "../components/common/Image";
import useDrawer from "../hooks/useDrawer";
import DarkLogo from '../assets/logb.svg';
import LightLogo from "../assets/logw.svg";
import useTheme from "../hooks/useTheme";
import { GoHomeFill } from "react-icons/go";
import TopBarBtn from "./TopBarBtn";
import { FaUserFriends } from "react-icons/fa";
import { RiNotification3Fill } from "react-icons/ri";
import useNotification from "../hooks/useNotification";

const AppBar = () => {
    const { notifications} = useNotification();
    const { toggleSidebar } = useDrawer();
    const { theme} = useTheme();

    return (
        <header
            style={{ paddingTop: "env(safe-area-inset-top)" }}
            className="fixed z-20 top-0 left-0 w-full bg-white dark:bg-gray-900 border-b dark:border-gray-800 border-gray-200"
        >
            <nav className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img
                            src={theme === "light" ? DarkLogo : LightLogo}
                            alt="Waanverse plus"
                            className="w-10 h-10"
                        />
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-6">
                            <TopBarBtn path="/" icon={GoHomeFill} />
                            <TopBarBtn path="/friends" icon={FaUserFriends} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 relative dark:bg-gray-800 p-2 flex items-center justify-center rounded-full">
                            {notifications > 0 && (
                                <span className="absolute top-0 right-0 bg-rose-500 text-white w-5 h-5 p-1 rounded-full flex items-center justify-center text-xs">
                                    {notifications}
                                </span>
                            )}
                            <RiNotification3Fill className="w-6 h-6 text-gray-700 dark:text-gray-100" />
                        </div>
                        <div>
                        <button
                            className="sm:hidden block"
                            onClick={toggleSidebar}
                        >
                            <Image
                                src={DefaultAvater}
                                alt="Waanverse plus"
                                className="w-10 h-10 rounded-full"
                            />
                            </button>
                            </div>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AppBar;
