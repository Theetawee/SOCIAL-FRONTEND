import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Seo from "../../components/utils/Seo";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent, useEffect } from "react";
const redirect_url = import.meta.env.VITE_GOOGLE_REDIRECT
const google_id = import.meta.env.VITE_GOOGLE_ID
import { HiOutlineUserAdd } from "react-icons/hi";

const LoginPage = () => {

  const GOOGLE_URL=`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_url}&prompt=consent&response_type=code&client_id=${google_id}&scope=openid%20email%20profile&access_type=offline`


    useEffect(() => {
        localStorage.setItem("out", "true");
    }, []);
    const { loging: isLoading, LoginUser } = useLogin();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        await LoginUser(username, password);
    };

    return (
        <Seo
            title="Waanverse - Sign in"
            description="Sign in to access your account and unlock a world of possibilities. Seamlessly connect with friends, explore personalized content, and stay updated on the latest news. Your journey begins here."
        >
            <section className="flex h-screen items-center flex-col justify-center py-20 px-4">
                <div className="max-w-md py-6  mx-auto rounded-0  shadow w-full bg-white dark:bg-gray-900 shadow-primary-950 border border-gray-100 dark:border-gray-800 rounded-xl px-2">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-white mb-4 dark:text-sky-500 font-medium text-center text-2xl">
                            Sign in to Waanverse
                        </h1>
                        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                disabled={isLoading}
                                id="username"
                                auto_on={true}
                            />
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                disabled={isLoading}
                                id="password"
                                auto_on={false}
                            />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="remember_me"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <Link
                                        to={"/"}
                                        className="text-sm text-primary-500 hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full  text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                {isLoading ? "Signing in..." : "Sign in"}
                            </button>
                            <div className="inline-flex items-center justify-center w-full">

                                <span className=" px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                                    or
                                </span>
                            </div>

                            <Link
                                to={GOOGLE_URL}
                                className="w-full flex dark:bg-gray-800 items-center justify-center text-gray-700 dark:text-white border dark:border-gray-800 dark:hover:bg-gray-800/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                <FcGoogle className="w-5 h-5 mr-3" />
                                Sign in with Google
                            </Link>
                        </div>
                    </form>
                </div>
                <Link
                    to={"/accounts/signup"}
                    className="text-primary-500 flex items-center gap-1 text-sm mt-3 hover:underline"
                >
                    <HiOutlineUserAdd className="w-5 h-5 inline-block" />

                    Create account
                </Link>
            </section>
        </Seo>
    );
};

export default LoginPage;
