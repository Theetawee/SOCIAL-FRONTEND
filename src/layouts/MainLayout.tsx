import { Link, Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import Bg from "../assets/bg.webp";
import Logo from "../components/common/Logo";

const MainLayout = () => {
  return (
    <ContextProvider>
      <ErrorBoundary fallback={<CommonError />}>
        <SuspenseLoader>
          <section
            style={{ backgroundImage: `url(${Bg})` }}
            className="bg-cover bg-center bg-no-repeat">
            <div className="w-full min-h-screen bg-black/20 px-6">
              <header>
                <div className="flex items-center gap-4 py-4">
                  <div>
                    <Link to={"/"} className="flex text-white items-end gap-x-1">
                      <Logo className="w-9 text-white" />
                      <span className="text-lg">
                        <span className="sr-only">W</span> aanverse
                      </span>
                    </Link>
                  </div>
                </div>
              </header>
              <main className="w-full ">
                <Outlet />
              </main>
            </div>
          </section>
        </SuspenseLoader>
      </ErrorBoundary>
    </ContextProvider>
  );
};

export default MainLayout;
