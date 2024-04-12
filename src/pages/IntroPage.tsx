/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from "react";
import Seo from "../components/utils/Seo";
import { Link } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import Bg from "../assets/bg.jpg";
import { useTranslation } from "react-i18next";
const GoogleBtn = lazy(
  () => import("../components/Partials/Account/GoogleBtn")
);
import Waan from "../assets/waan.png";


const Intro = () => {
  const { t } = useTranslation();

  return (
    <Seo
      title="Belonging without borders - Waanverse"
      description="Discover a world of endless possibilities as you navigate through diverse communities, vibrant discussions, and captivating content. From art and culture to technology and lifestyle, there's something for everyone on Waanverse.">
      <section className="bg-cover bg-center bg-no-repeat min-h-screen sm:h-screen flex items-center justify-center" style={{backgroundImage: `url(${Bg})`}}>
        <div className="bg-black/20 px-6 h-full  py-24 w-full">
        <section  className="flex items-center max-w-screen-lg mx-auto justify-between">
          <div className="flex flex-wrap sm:flex-nowrap gap-y-20 items-center h-full justify-center gap-x-10">
            <img src={Waan} alt="" className="w-80 mx-auto h-full rounded-xl shadow" />
            <div className="mt-4 md:mt-0">
              <h1 className="mb-20 md:text-4xl text-center text-3xl text-gray-800 dark:text-white">
                Connecting people through meaningful connections
              </h1>
              <div className="grid grid-cols-3 gap-5">
                <Link
                  to="/accounts/signup"
                  className="justify-center text-gray-800 flex max-w-sm w-full items-center dark:text-white border border-gray-500 dark:border-gray-600 font-medium rounded text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  {t("Join")}
                </Link>
                <Link
                  to="/accounts/login"
                  className="justify-center flex max-w-sm w-full  items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  {t("Login")}
                </Link>
                <div className="max-w-sm mx-auto w-full">
                  <SuspenseLoader>
                    <GoogleBtn />
                  </SuspenseLoader>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </section>
    </Seo>
  );
};

export default Intro;
