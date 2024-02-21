import { Link } from "react-router-dom";
import { lazy } from "react";
const Input = lazy(() => import("../../components/common/Input"));
const Seo = lazy(() => import("../../components/utils/Seo"));
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useEffect } from "react";
import useSignup from "../../hooks/Auth/useSignUp";
import { CgLogIn } from "react-icons/cg";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
const SignUpPage = () => {
    useEffect(() => {
        localStorage.setItem("out", "true");
    }, []);
    const { isLoading, signup, errors } = useSignup();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password1 = e.currentTarget.password.value;
        const password2 = e.currentTarget.password.value;
        const email = e.currentTarget.email.value;
        const name = e.currentTarget.set_name.value;
        await signup({ email, password1, password2, username, name });
    };

    return (
        <Seo
            title="Sign Up and Join the Community - Create Your Account Today!"
            description="Join our community by creating an account on our signup page! Discover new connections, share your passions, and embark on a journey of exploration."
        >
            <section className="flex h-screen items-center flex-col justify-center py-20 px-2">
                <div className="max-w-md mx-auto dark:shadow-primary-900 h-full overflow-y-auto rounded-xl bg-white shadow-shadow w-full dark:bg-gray-900 dark:border-gray-800 px-2 py-6">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-sky-500 mb-4 font-bold text-center text-2xl">
                            Create Waanverse account
                        </h1>
                        <SuspenseLoader>
                            <div className="grid grid-cols-1 gap-6 p-4 ">
                                <div>
                                    {errors && errors.length > 0 && (
                                        <div>
                                            <ul className="text-red-500 list-disc pl-4">
                                                {errors.map((error) => (
                                                    <li
                                                        className="text-sm font-medium"
                                                        key={errors.indexOf(
                                                            error
                                                        )}
                                                    >
                                                        {error}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email"
                                    disabled={isLoading}
                                    id="email"
                                    auto_on={true}
                                />
                                <Input
                                    type="text"
                                    name="set_name"
                                    label="Name"
                                    disabled={isLoading}
                                    id="name"
                                    auto_on={false}
                                />

                                <Input
                                    type="text"
                                    name="username"
                                    label="Username"
                                    disabled={isLoading}
                                    id="username"
                                    auto_on={false}
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
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="remember_me"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-900 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="remember_me"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full  text-white dark:bg-sky-700 dark:hover:bg-primary-700/90 bg-primary-600 hover:bg-primary-600/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                                >
                                    {isLoading
                                        ? "Creating..."
                                        : "Create account"}
                                </button>
                                <div className="inline-flex items-center justify-center w-full">
                                    <span className="px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                                        or
                                    </span>
                                </div>

                                <button className="w-full flex items-center justify-center dark:text-white text-gray-700 border dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-800/90 border-gray-600 font-medium rounded text-sm px-5 py-2.5 text-center">
                                    <FcGoogle className="w-5 h-5 mr-3" />
                                    Sign in with Google
                                </button>
                                <div>
                                    <p className="text-center text-xs ">
                                        By creating an account, you agree to our{" "}
                                        <Link
                                            className="text-primary-500 hover:underline"
                                            to={"/"}
                                        >
                                            terms
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            to={"/"}
                                            className="text-primary-500 hover:underline"
                                        >
                                            privacy policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </SuspenseLoader>
                    </form>
                </div>
                <Link
                    to={"/accounts/login"}
                    className="text-primary-500 flex items-center justify-center text-sm mt-3 hover:underline"
                >
                    <CgLogIn className="w-5 h-5 inline-block mr-1" />
                    Sign in to an existing account
                </Link>
            </section>
        </Seo>
    );
};

export default SignUpPage;
