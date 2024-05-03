import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import Frame from "./Frame";
import HomeSidebar from "../components/Home/HomeSidebar";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import MainSuspense from "../components/common/MainSuspense";
import AppBar from "./AppBar";
import VerifiedMsg from "../components/Account/VerifiedMsg";



const FrameLayout = () => {
  return (
      <ContextProvider>
        <ErrorBoundary fallback={<CommonError />}>
          <MainSuspense>
          <Frame />
          <div className="w-full mx-auto md:mr-[30%] md:w-[50%] sm:ml-[30%]  sm:w-[70%] xl:mr-[35%] xl:w-[45%]  md:ml-[20%]">
            <div className="mb-16 block sm:hidden">
              <AppBar/>
            </div>
            <Outlet />
          </div>
          <div className="fixed hidden md:block xl:w-[35%] top-0  dark:border-gray-900 right-0 md:w-[30%]    h-screen ">
          <HomeSidebar />
          <VerifiedMsg/>
          </div>
          </MainSuspense>
          </ErrorBoundary>
      </ContextProvider>
  );
};

export default FrameLayout;
