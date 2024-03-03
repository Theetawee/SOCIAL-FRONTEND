import Seo from "../components/utils/Seo";
import LogoB from "../assets/logb.svg";
import LogoW from "../assets/logw.svg";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";
import GoogleBtn from "../components/Partials/Account/GoogleBtn";




const Intro = () => {
    const { theme } = useTheme();

    return (
        <Seo
            title="Belonging without borders - Waanverse"
            description="Discover a world of endless possibilities as you navigate through diverse communities, vibrant discussions, and captivating content. From art and culture to technology and lifestyle, there's something for everyone on Waanverse."
        >
            <section className="bg-page-pattern">
                <section className="bg-white flex items-center justify-between min-h-screen dark:bg-gray-900/50">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img
                            className="w-full sm:h-72 h-32 md:h-96  "
                            src={theme === "dark" ? LogoW : LogoB}
                            alt="Waanverse Logo"
                        />
                        <div className="mt-4 md:mt-0">
                            <h1 className="mb-4 md:text-6xl text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Belonging without borders
                            </h1>
                            <p className="mb-6 font-light text-center md:text-left text-gray-500 md:text-lg dark:text-gray-300">
                                Ready to embark on a journey to belonging?
                                Waanverse is where friendships transcend
                                boundaries and connections flourish. Join us
                                today and explore a world without borders.
                            </p>
                            <div className="flex justify-center flex-wrap py-8 items-center gap-6">
                                <Link
                                    to="/accounts/signup"
                                    className="justify-center flex max-w-sm w-full items-center text-white border border-gray-100 dark:border-gray-600 font-medium rounded text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
                                >
                                    Create your Account
                                </Link>
                                <Link
                                    to="/accounts/login"
                                    className="justify-center flex max-w-sm w-full  items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
                                >
                                    Login to your Account
                                </Link>
                                <div className="max-w-sm mx-auto w-full">
                                    <GoogleBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Seo>
    );
};

export default Intro;
