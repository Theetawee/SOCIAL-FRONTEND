import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ContextProvider from "../context/ContextProvider";
import Frame from "./Frame";
const FrameLayout = () => {
  return (
    <ThemeProvider>
      <ContextProvider>
          <Frame />
          <div className="sm:ml-72 lg:mr-[32%] bg-white dark:bg-gray-950 min-h-screen  lg:ml-[25%]">
            <div>
            <Outlet />
            </div>
          </div>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default FrameLayout;
