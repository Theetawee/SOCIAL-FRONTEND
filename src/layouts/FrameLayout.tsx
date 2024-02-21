import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import AppBar from "./AppBar";
import Frame from "./Frame";
import SideBar from "./SideBar";
import SuspenseLoader from "../components/utils/SuspenseLoader";
const FrameLayout = () => {
    return (
        <ContextProvider>
            <AppBar />
            <section>
                <Frame />
                <main className="sm:ml-72 lg:mr-[32%] bg-white/90 dark:bg-gray-950 min-h-screen  lg:ml-[25%]">
                    <ErrorBoundary fallback={<CommonError />}>
                        <SuspenseLoader>
                            <Outlet />
                        </SuspenseLoader>
                    </ErrorBoundary>
                </main>
                <SideBar />
            </section>
        </ContextProvider>
    );
};

export default FrameLayout;
