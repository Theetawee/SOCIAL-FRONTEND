import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { lazy } from "react";
const Seo = lazy(() => import("../../components/utils/Seo"));
const Input =lazy(() => import("../../components/common/Input"));
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent} from "react";
const redirect_url = import.meta.env.VITE_GOOGLE_REDIRECT
const google_id = import.meta.env.VITE_GOOGLE_ID
import { HiOutlineUserAdd } from "react-icons/hi";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
import Loader from "../../components/common/Loader";

const LoginPage = () => {

  const GOOGLE_URL=`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_url}&prompt=consent&response_type=code&client_id=${google_id}&scope=openid%20email%20profile&access_type=offline`


    const { loging: isLoading, LoginUser } = useLogin();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;
        await LoginUser(username, password)
    };

    return (
        <Seo
            title="Waanverse - Sign in"
            description="Sign in to access your account and unlock a world of possibilities. Seamlessly connect with friends, explore personalized content, and stay updated on the latest news. Your journey begins here."
        >
            <section className="flex  items-center flex-col justify-center py-20 px-4">
                <div className="max-w-md py-6 shadow-shadow mx-auto rounded-0   w-full bg-white dark:bg-gray-900 shadow-primary-100 dark:shadow-primary-950  rounded-xl px-2">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-primary-500 mb-4  font-medium text-center text-2xl">
                            Sign in to Waanverse
                        </h1>
                        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
                            <SuspenseLoader>
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                disabled={isLoading}
                                id="username"
                                auto_on={true}
                                /></SuspenseLoader>
                            <SuspenseLoader><Input
                                type="password"
                                name="password"
                                label="Password"
                                disabled={isLoading}
                                id="password"
                                auto_on={false}
                            />
                            </SuspenseLoader>
                            <div className="flex justify-between">
                                <div>
                                    <Link
                                        to={"/accounts/reset-password"}
                                        className="text-sm text-primary-500 hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full  text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                {isLoading ? <Loader/> : "Sign in"}
                            </button>
                            <div className="inline-flex items-center justify-center w-full">
                                <span className="font-medium">
                                    or
                                </span>
                            </div>

                            <Link
                                to={GOOGLE_URL}
                                className="w-full flex dark:bg-gray-800 items-center justify-center text-gray-700 dark:text-white border dark:border-gray-800 dark:hover:bg-gray-800/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                <FcGoogle className="w-5 h-5 mr-3" />
                                Sign in with Google
                            </Link></div>
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
