import { Outlet } from "react-router-dom";
import { lazy } from "react";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
const CommonError = lazy(() => import("../components/common/CommonError"));
const AppBar = lazy(() => import("./AppBar"));
const Frame = lazy(() => import("./Frame"));
const SideBar = lazy(() => import("./SideBar"));
import SuspenseLoader from "../components/utils/SuspenseLoader";
const FrameLayout = () => {
    return (
        <ContextProvider>
            <SuspenseLoader className="h-auto">
                <AppBar />
            </SuspenseLoader>
            <section>
                <SuspenseLoader className="h-auto">
                    <Frame />
                </SuspenseLoader>
                <main className="sm:ml-72 pt-16 lg:mr-[32%] bg-white/90 dark:bg-gray-950 min-h-screen  lg:ml-[25%]">
                    <ErrorBoundary
                        fallback={
                            <SuspenseLoader>
                                <CommonError />
                            </SuspenseLoader>
                        }
                    >
                        <SuspenseLoader>
                            <Outlet />
                        </SuspenseLoader>
                    </ErrorBoundary>
                </main>
                <SuspenseLoader className="h-auto">
                    <SideBar />
                </SuspenseLoader>
            </section>
        </ContextProvider>
    );
};

export default FrameLayout;
