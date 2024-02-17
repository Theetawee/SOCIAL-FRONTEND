import { useContext } from "react"
import { DrawerContext } from "../context/DrawerContext"

const useDrawer = () => {
    return useContext(DrawerContext);
}

export default useDrawer
