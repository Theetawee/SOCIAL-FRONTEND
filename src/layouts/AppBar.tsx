import DefaultAvater from "../assets/default.webp";
import Image from "../components/common/Image";
import useDrawer from "../hooks/useDrawer";
import DarkLogo from "../assets/logb.svg";
import LightLogo from "../assets/logw.svg";
import useTheme from "../hooks/useTheme";
import { RiNotification3Fill } from "react-icons/ri";
import useNotification from "../hooks/useNotification";
import useAuth from "../hooks/Auth/useAuth";
import { useContext } from "react";
import { TopBarContext } from "../context/TopBarContext";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const AppBar = () => {
  const navigate = useNavigate();
  const { notifications } = useNotification();
  const { toggleSidebar } = useDrawer();
  const { theme } = useTheme();
  const { user } = useAuth();
  const { title, back } = useContext(TopBarContext);

  return (
    <header className="sticky">
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
                  <p className="text-base font-medium">{title}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src={theme === "light" ? DarkLogo : LightLogo}
                  alt="Waanverse plus"
                  className="w-10 h-10"
                />
              </div>
            </>
          )}
          <div className="grid sm:grid-cols-1 grid-cols-3 gap-x-3">
            <Link
              to={"/notifications"}
              className="bg-gray-300 relative dark:bg-gray-800 p-1 flex items-center justify-center rounded-full">
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white w-4 h-4 p-0.5 rounded-full flex items-center justify-center text-xs">
                  {notifications}
                </span>
              )}
              <RiNotification3Fill className="w-5 h-5 text-gray-700 dark:text-gray-100" />
            </Link>
            <div className="flex items-center sm:hidden justify-center p-1 bg-gray-300 dark:bg-gray-800 rounded-full">
              <Link to={"/compose"}>
                <IoMdAdd className="w-6 h-6" />
              </Link>
            </div>
            <div>
              <button className="sm:hidden block" onClick={toggleSidebar}>
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
