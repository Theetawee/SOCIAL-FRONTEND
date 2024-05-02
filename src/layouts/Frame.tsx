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
                className={`fixed top-0 border-r border-gray-300 dark:border-gray-900 left-0 z-50 sm:z-0 w-5/6 sm:w-[30%] md:w-[20%]   h-screen transition-transform -translate-x-full ${
                    isOpen ? "translate-x-0" : "sm:translate-x-0"
                } `}
                aria-label="Sidebar"
            >
                {/* Sidebar Content */}
                <div className="h-full px-3 relative pt-6   bg-gray-100 dark:bg-gray-950">
                    <Aside/>
                </div>
            </aside>
        </>
    );
};

export default Frame;
