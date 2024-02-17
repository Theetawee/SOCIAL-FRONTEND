import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
    icon: IconType;
    path: string;
    label: string;
}

const SideBarLink = ({ icon: Icon, path, label }: Props) => {
    return (
        <div>
            <Link
                to={path}
                className="flex hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition ease-in-out duration-500 hover:shadow p-4 items-center "
            >
                <Icon className="w-6 h-6 text-primary-500" />
                <span className="ml-3 font-light">{label}</span>
            </Link>
        </div>
    );
};

export default SideBarLink;
