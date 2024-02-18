import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Seo from "../../components/utils/Seo";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent } from "react";

const LoginPage = () => {
  const { loging:isLoading, LoginUser } = useLogin();

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    await LoginUser(username, password);
  }



    return (
        <Seo
            title="Waanverse - Sign in"
            description="Sign in to access your account and unlock a world of possibilities. Seamlessly connect with friends, explore personalized content, and stay updated on the latest news. Your journey begins here."
        >
            <section className="flex items-center flex-col justify-center py-20 px-2">
                <div className="max-w-md mx-auto rounded-md shadow w-full bg-gray-800 p-4">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-white mb-4 font-bold text-center text-xl">
                            Sign in to Waanverse
                        </h1>
                        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                disabled={isLoading}
                                id="username"
                            />
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                disabled={isLoading}
                                id="password"
                            />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center mb-4">
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
                                className="w-full  text-white bg-primary-600 hover:bg-primary-600/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-800">
                                    or
                                </span>
                            </div>

                            <button className="w-full flex items-center justify-center text-white border border-gray-600 font-medium rounded text-sm px-5 py-2.5 text-center">
                                <FcGoogle className="w-5 h-5 mr-3" />
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                </div>
                <Link
                    to={"/"}
                    className="text-primary-500 mt-3 hover:underline"
                >
                    Create account
                </Link>
            </section>
        </Seo>
    );
};

export default LoginPage;
