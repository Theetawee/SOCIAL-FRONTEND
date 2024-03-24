import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import { lazy } from "react";
const Footer = lazy(() => import('../components/Partials/Footer'));

const MainLayout = () => {
    return (
      <ContextProvider>
        <ErrorBoundary fallback={<CommonError />}>
          <SuspenseLoader>
            <section className="bg-page-pattern">
              <div className="bg-gray-100/70 min-h-screen  dark:bg-gray-950/70">
                <main>
                  <Outlet />
                </main>
                <Footer />
              </div>
            </section>
          </SuspenseLoader>
        </ErrorBoundary>
      </ContextProvider>
    );
};

export default MainLayout;
