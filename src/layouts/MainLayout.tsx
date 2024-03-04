import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import Footer from "../components/Partials/Footer";

const MainLayout = () => {
    return (
        <ContextProvider>
            <ErrorBoundary fallback={<CommonError />}>
                <SuspenseLoader>
                    <section className="bg-page-pattern min-h-screen">
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </section>
                </SuspenseLoader>
            </ErrorBoundary>
        </ContextProvider>
    );
};

export default MainLayout;
