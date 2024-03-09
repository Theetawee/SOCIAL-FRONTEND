import Image from "../components/common/Image";
import useAuth from "../hooks/Auth/useAuth";
import { lazy } from "react";
import DefaultAvater from "../assets/default.webp";
import { Link } from "react-router-dom";
const SideBarLink = lazy(() => import("./SideBarLink"));
import { FaUserFriends, FaUser, FaSignOutAlt, FaSearch } from "react-icons/fa";
import Switch from "../components/common/Switch";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import { GoHomeFill } from "react-icons/go";
import Name from "../components/Partials/Account/Name";

const Aside = () => {
  const { user } = useAuth();

  return (
    <section className="grid grid-cols-1 gap-6">
      <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-900 rounded-md shadow-sm">
        <div>
          <div className="flex items-center flex-wrap justify-between">
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
                  <Name
                    name={user?.name || ""}
                    verified={user?.verified}
                    size="lg"
                  />
                  <p className="leading-3 truncate max-w-32">
                    @{user?.username}
                  </p>
                </div>
              </Link>
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
          <SideBarLink icon={FaSearch} path="/search" label="Search" />
        </SuspenseLoader>

        <SuspenseLoader className="h-auto">
          <SideBarLink icon={FaSignOutAlt} path="/logout" label="Logout" />
        </SuspenseLoader>
        <div className="p-2 ">
          <Switch />
        </div>
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
