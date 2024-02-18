import { useContext } from "react";
import { SideBarContext } from "../context/SidebarContext";

const useSidebar = () => {
    return useContext(SideBarContext);

};

export default useSidebar;
