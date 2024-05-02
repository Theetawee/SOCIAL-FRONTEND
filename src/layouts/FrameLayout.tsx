import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ContextProvider from "../context/ContextProvider";
import Frame from "./Frame";
import HomeSidebar from "../components/Home/HomeSidebar";
const FrameLayout = () => {
  return (
    <ThemeProvider>
      <ContextProvider>
          <Frame />
          <div className="w-full mx-auto md:mr-[30%] md:w-[50%] sm:ml-[30%]  sm:w-[70%] xl:mr-[35%] xl:w-[45%]  md:ml-[20%]">
            <Outlet />
          </div>
          <div className="fixed hidden md:block xl:w-[35%] top-0  dark:border-gray-900 right-0 z-50 md:w-[30%]    h-screen ">
          <HomeSidebar />
          </div>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default FrameLayout;
