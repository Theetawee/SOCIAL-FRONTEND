import { Link } from "react-router-dom";
import { lazy } from "react";
const Input = lazy(() => import("../../components/common/Input"));
const Seo = lazy(() => import("../../components/utils/Seo"));
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
                <div className="max-w-md mx-auto dark:shadow-primary-900 overflow-y-auto rounded-xl bg-white shadow-shadow w-full dark:bg-gray-900 dark:border-gray-800 px-2 py-6">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-sky-500 mb-4 font-bold text-center text-2xl">
                            Create Waanverse account
                        </h1>
                        <div className="grid grid-cols-1 gap-6 p-4 ">
                            <div>
                                {errors && errors.length > 0 && (
                                    <div>
                                        <ul className="text-red-500 list-disc pl-4">
                                            {errors.map((error) => (
                                                <li
                                                    className="text-sm font-medium"
                                                    key={errors.indexOf(error)}
                                                >
                                                    {error}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <SuspenseLoader>
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email"
                                    disabled={isLoading}
                                    id="email"
                                    auto_on={true}
                                />
                            </SuspenseLoader>
                            <SuspenseLoader>
                                <Input
                                    type="text"
                                    name="set_name"
                                    label="Name"
                                    disabled={isLoading}
                                    id="name"
                                    auto_on={false}
                                />
                            </SuspenseLoader>
                            <SuspenseLoader>
                                {" "}
                                <Input
                                    type="text"
                                    name="username"
                                    label="Username"
                                    disabled={isLoading}
                                    id="username"
                                    auto_on={false}
                                />
                            </SuspenseLoader>
                            <SuspenseLoader>
                                {" "}
                                <Input
                                    type="password"
                                    name="password"
                                    label="Password"
                                    disabled={isLoading}
                                    id="password"
                                    auto_on={false}
                                />
                            </SuspenseLoader>
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full  text-white dark:bg-sky-700 dark:hover:bg-primary-700/90 bg-primary-600 hover:bg-primary-600/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                {isLoading ? "Creating..." : "Create account"}
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
