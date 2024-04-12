import { Link } from "react-router-dom";
import { FormEvent } from "react";
import useSignup from "../../hooks/Auth/useSignUp";
import { CgLogIn } from "react-icons/cg";
import Button from "../../components/common/Button";
import Seo from "../../components/utils/Seo";
import Input from "../../components/common/Input";
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
      description="Join our community by creating an account on our signup page! Discover new connections, share your passions, and embark on a journey of exploration.">
      <section className="flex  items-center flex-col justify-center py-8 px-2">
        <div className="max-w-md mx-auto shadow  rounded border border-gray-600/20  h-full  w-full bg-gray-900/20 dark:border-gray-800 px-2 py-6">
          <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
<div className="px-4">
            <h1 className="text-white mb-2 font-bold text-2xl">
              Create Waanverse account
            </h1>
            <p>It's Quick and easy</p>
            </div>
            <div className="grid grid-cols-1 gap-6 p-4 ">
              <div>
                {errors && errors.length > 0 && (
                  <div>
                    <ul className="text-red-500 list-disc pl-4">
                      {errors.map((error) => (
                        <li
                          className="text-sm font-medium"
                          key={errors.indexOf(error)}>
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
                className="mx-2 bg-gray-900 rounded-full"
                auto_on={true}
              />
                <Input
                  type="text"
                  name="set_name"
                  className="mx-2 bg-gray-900 rounded-full"
                  label="Name"
                  disabled={isLoading}
                  auto_on={false}
                />
                {" "}
                <Input
                  type="text"
                  name="username"
                  className="mx-2 bg-gray-900 rounded-full"
                  label="Username"
                  disabled={isLoading}
                  auto_on={false}
                />
                {" "}
                <Input
                  type="password"
                  name="password"
                  className="mx-2 bg-gray-900 rounded-full"
                  label="Password"
                  disabled={isLoading}
                  auto_on={false}
                />
              <Button
                type="submit"
                label="Create account"
                disabled={isLoading}
                className="w-full text-lg text-white dark:bg-sky-700 dark:hover:bg-primary-700/90 bg-primary-600 hover:bg-primary-600/90 font-medium rounded  px-5 py-2.5 text-center"
              />
              <div>
                <p className="text-center text-xs ">
                  By creating an account, you agree to our{" "}
                  <Link to={"/legal/privacy"} className="text-primary-500 hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
          <Link
            to={"/accounts/login"}
            className="text-white flex items-center mt-3 hover:underline">
            <CgLogIn className="w-5 h-5 inline-block mr-1" />
            Sign in to an existing account
          </Link>
        </div>
      </section>
    </Seo>
  );
};

export default SignUpPage;
