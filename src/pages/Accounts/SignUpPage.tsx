import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Seo from "../../components/utils/Seo";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useEffect } from "react";
import useSignup from "../../hooks/Auth/useSignUp";

const SignUpPage = () => {
    useEffect(() => {
        localStorage.setItem("out", "true");
    }, []);
    const { isLoading, signup } = useSignup();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password1 = e.currentTarget.password.value;
        const password2 = e.currentTarget.password.value;
        const email = e.currentTarget.email.value;
        const name = e.currentTarget.set_name.value;
        await signup({ username, password1, password2, email, name });
    };

    return (
        <Seo
            title="Sign Up and Join the Community - Create Your Account Today!"
            description="Join our community by creating an account on our signup page! Discover new connections, share your passions, and embark on a journey of exploration."
        >
            <section className="flex items-center flex-col justify-center py-20 px-2">
                <div className="max-w-md mx-auto rounded-md shadow w-full bg-gray-800 p-4">
                    <form onSubmit={handleSubmit} method="post">
                        <h1 className="text-white mb-4 font-bold text-center text-xl">
                            Create Waanverse account
                        </h1>
                        <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
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
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
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
                                className="w-full  text-white bg-primary-600 hover:bg-primary-600/90 font-medium rounded text-sm px-5 py-2.5 text-center"
                            >
                                {isLoading ? "Creating..." : "Create account"}
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
                            <div>
                                <p className="text-center text-xs ">
                                    By creating an account, you agree to our
                                    {" "}<Link className="text-primary-500 hover:underline" to={"/"}>terms</Link> and <Link to={"/"} className="text-primary-500 hover:underline">privacy policy</Link>.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <Link
                    to={"/accounts/login"}
                    className="text-primary-500 mt-3 hover:underline"
                >
                    Sign in to an existing account
                </Link>
            </section>
        </Seo>
    );
};

export default SignUpPage;
