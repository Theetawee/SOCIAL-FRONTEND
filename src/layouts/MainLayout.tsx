import { Link, Outlet } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import Logo from "../components/common/Logo";
import utils from "../hooks/utils";

const MainLayout = () => {
  const { BgUrl } = utils();
  return (
    <ContextProvider>
      <section
        style={{ backgroundImage: `url(${BgUrl})` }}
        className="bg-cover bg-center bg-no-repeat">
        <div className="w-full bg-black/40 px-6">
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
    </ContextProvider>
  );
};

export default MainLayout;
