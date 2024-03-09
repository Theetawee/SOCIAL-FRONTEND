import { Link } from "react-router-dom";
import { lazy } from "react";
const Input = lazy(() => import("../../components/common/Input"));
const Seo = lazy(() => import("../../components/utils/Seo"));
import { FormEvent } from "react";
import useSignup from "../../hooks/Auth/useSignUp";
import { CgLogIn } from "react-icons/cg";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";
const SignUpPage = () => {
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
      <section className="flex  items-center flex-col justify-center py-16 px-2">
        <div className="max-w-md mx-auto shadow  rounded bg-white  h-full  w-full dark:bg-gray-900 dark:border-gray-800 px-2 py-6">
          <Link to={"/"} className="flex items-center justify-center mb-5">
            <Logo />
          </Link>

          <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />

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
                  auto_on={true}
                />
              </SuspenseLoader>
              <SuspenseLoader>
                <Input
                  type="text"
                  name="set_name"
                  label="Name"
                  disabled={isLoading}
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
                  auto_on={false}
                />
              </SuspenseLoader>
              <Button
                type="submit"
                label="Create account"
                disabled={isLoading}
                className="w-full text-lg text-white dark:bg-sky-700 dark:hover:bg-primary-700/90 bg-primary-600 hover:bg-primary-600/90 font-medium rounded  px-5 py-2.5 text-center"
              />
              <div>
                <p className="text-center text-xs ">
                  By creating an account, you agree to our{" "}
                  <Link className="text-primary-500 hover:underline" to={"/"}>
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link to={"/"} className="text-primary-500 hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
          <Link
            to={"/accounts/login"}
            className="text-primary-500 flex items-center justify-center text-sm mt-3 hover:underline"
          >
            <CgLogIn className="w-5 h-5 inline-block mr-1" />
            Sign in to an existing account
          </Link>
        </div>
      </section>
    </Seo>
  );
};

export default SignUpPage;
