import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
const FrameLayout = () => {
    return (
        <ContextProvider>
            <ErrorBoundary fallback={<CommonError/>}>
                <Outlet />
                </ErrorBoundary>
        </ContextProvider>
    );
};

export default FrameLayout;
