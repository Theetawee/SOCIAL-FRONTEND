import DefaultAvater from "../assets/default.webp";
import Image from "../components/common/Image";
import useDrawer from "../hooks/useDrawer";
import DarkLogo from '../assets/logb.svg';
import LightLogo from "../assets/logw.svg";
import useTheme from "../hooks/useTheme";
import { RiNotification3Fill } from "react-icons/ri";
import useNotification from "../hooks/useNotification";
import useAuth from "../hooks/Auth/useAuth";
import { useContext } from "react";
import { TopBarContext } from "../context/TopBarContext";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



const AppBar = () => {
    const navigate = useNavigate();
    const { notifications} = useNotification();
    const { toggleSidebar } = useDrawer();
    const { theme} = useTheme();
    const { user } = useAuth();
    const { title,back} = useContext(TopBarContext);

    return (
        <header
            style={{ paddingTop: "env(safe-area-inset-top),0" }}
            className="fixed z-20 h-16 flex backdrop-filter backdrop-blur-lg bg-opacity-30 items-center justify-center top-0 left-0 w-full  border-b dark:border-gray-800 border-gray-200"
        >
            <nav className="px-4 py-2  w-full">
                <div className="flex justify-between items-center">
                    {title ? (
                        <>
                            <div>
                                <div className="flex items-center justify-start">
                                    {back && (
                                        <button onClick={() => navigate(-1)}>
                                            <FaArrowLeft className="w-5 mr-2 h-5" />
                                        </button>
                                    )}
                                    <p className="text-base font-medium">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <img
                                    src={
                                        theme === "light" ? DarkLogo : LightLogo
                                    }
                                    alt="Waanverse plus"
                                    className="w-8 h-8"
                                />
                            </div>
                        </>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 relative dark:bg-gray-800 p-1 flex items-center justify-center rounded-full">
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 bg-rose-500 text-white w-4 h-4 p-0.5 rounded-full flex items-center justify-center text-xs">
                                    {notifications}
                                </span>
                            )}
                            <RiNotification3Fill className="w-5 h-5 text-gray-700 dark:text-gray-100" />
                        </div>
                        <div>
                            <button
                                className="sm:hidden block"
                                onClick={toggleSidebar}
                            >
                                <Image
                                    src={user?.image || DefaultAvater}
                                    alt={user?.name || "user image"}
                                    hash={user?.profile_image_hash}
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
