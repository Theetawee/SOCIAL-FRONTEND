import { Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import Frame from "./Frame";
import { ErrorBoundary } from "react-error-boundary";
import CommonError from "../components/common/CommonError";
import MainSuspense from "../components/common/MainSuspense";
import AppBar from "./AppBar";
import SideBar from "./SideBar";



const FrameLayout = () => {
  return (
      <ContextProvider>
        <ErrorBoundary fallback={<CommonError />}>
          <Frame />
          <div className="w-full mx-auto sm:px-2 md:mr-[30%] md:w-[50%] sm:ml-[30%]  sm:w-[70%] xl:mr-[35%] xl:w-[45%]  md:ml-[20%]">
            <div className="mb-16 block sm:hidden">
              <AppBar/>
            </div>
            <MainSuspense>
            <Outlet />
            </MainSuspense>
          </div>
          <div className="fixed hidden md:block xl:w-[35%] top-0  dark:border-gray-900 right-0 md:w-[30%]    h-screen ">
            <SideBar/>
          </div>
          </ErrorBoundary>
      </ContextProvider>
  );
};

export default FrameLayout;
