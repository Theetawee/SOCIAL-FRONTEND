import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import SuspenseLoader from "../components/utils/SuspenseLoader";

const MainLayout = () => {
    return (
        <ContextProvider>
            <ErrorBoundary fallback={<CommonError />}>
                <SuspenseLoader>
                    <main className="bg-page-pattern min-h-screen">
                        <Outlet />
                        </main>
                </SuspenseLoader>
            </ErrorBoundary>
        </ContextProvider>
    );
};

export default MainLayout;
