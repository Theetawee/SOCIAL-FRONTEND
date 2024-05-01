import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ContextProvider from "../context/ContextProvider";
import AppBar from "./AppBar";
import Frame from "./Frame";
import SideBar from "./SideBar";
const FrameLayout = () => {
  return (
    <ThemeProvider>
      <ContextProvider>
        <AppBar />
        <section>
          <Frame />
          <main className="sm:ml-72 pt-16 lg:mr-[32%] bg-white dark:bg-gray-950 min-h-screen  lg:ml-[25%]">
            <Outlet />
          </main>
          <SideBar />
        </section>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default FrameLayout;
