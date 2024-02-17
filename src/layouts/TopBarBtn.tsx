import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface Props {
    icon: IconType;
    path: string;
}
const TopBarBtn = ({ icon: Icon,path }: Props) => {
    return (
        <div>
            <NavLink className="topbar block" to={path}>

                    <Icon className="w-7 h-7 " />

            </NavLink>
        </div>
    );
};

export default TopBarBtn;
