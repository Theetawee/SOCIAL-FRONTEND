import useDrawer from "../hooks/useDrawer";
import Aside from "./Aside";

const Frame = () => {
    const {isOpen,showDrawer,toggleSidebar } = useDrawer();

    return (
        <>
            {!showDrawer && isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed w-full h-full top-0 left-0 z-40 bg-white dark:bg-gray-950 opacity-20"
                ></div>
            )}

            <aside
                className={`fixed top-0 border-r-2 border-gray-300 dark:border-gray-800 left-0 z-50 sm:z-0 w-5/6 sm:w-72 lg:w-[25%]   h-screen transition-transform -translate-x-full ${
                    isOpen ? "translate-x-0" : "sm:translate-x-0"
                } `}
                aria-label="Sidebar"
            >
                {/* Sidebar Content */}
                <div className="h-full px-3 relative sm:pt-20 pt-6   bg-white dark:bg-gray-950">
                    <Aside/>
                </div>
            </aside>
        </>
    );
};

export default Frame;
