import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import useDrawer from "../hooks/useDrawer";
import useAuth from "../hooks/Auth/useAuth";
interface Props {
    icon?: IconType;
    path: string;
    label: string;
    showIcon?: boolean,
    enabled?: boolean,
}



const SideBarLink = ({ icon: Icon, path, label, showIcon = true, enabled = true }: Props) => {
    const { user} = useAuth();
    const { toggleSidebar } = useDrawer();
    return (<>
        {enabled || user ?(<>
        <div>
            <Link
                onClick={toggleSidebar}
                to={path}
                className="flex hover:bg-white dark:hover:bg-gray-800 rounded-md transition ease-in-out duration-500 hover:shadow p-4 items-center "
            >
                {showIcon && Icon && <Icon className="w-6 h-6 text-primary-500" />}
                <span className="ml-3 font-light">{label}</span>
            </Link>
        </div></>):(<></>)}</>
    );
};

export default SideBarLink;
