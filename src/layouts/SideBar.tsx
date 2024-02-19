import useSidebar from "../hooks/useSidebar";

const SideBar = () => {
    const { component } = useSidebar();
    return (
        <aside
            style={{
                paddingTop: `calc(env(safe-area-inset-top, 0px) + 5rem)`,
            }}
            className="lg:w-[32%] lg:block  hidden p-4 h-screen fixed right-0 border-l-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 bg-gray-50 top-0"
        >
            <div className="h-full overflow-y-auto">{component}</div>
        </aside>
    );
};

export default SideBar;
