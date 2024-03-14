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
            <section className="bg-gray-100 dark:bg-gray-950">
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
