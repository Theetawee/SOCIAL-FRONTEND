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
                <main className="sm:ml-72 bg-gray-900/60 min-h-screen pt-20 md:ml-[25%] px-4">
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
