import { Link } from "react-router-dom";
import { FormEvent } from "react";
import useSignup from "../../hooks/Auth/useSignUp";
import Seo from "../../components/utils/Seo";
import Input from "../../components/common/Input";
import Loader from "../../components/common/Loader";
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
        <div className="max-w-lg rounded-2xl mx-auto shadow border border-gray-600/20  h-full  w-full bg-white text-gray-800 dark:border-gray-800 px-2 py-6">
          <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
            <div className="px-4">
              <h1 className="text-gray-700 mb-2 text-2xl">
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
                className=" bg-white"
                auto_on={true}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="set_name"
                  className=" bg-white"
                  label="Name"
                  disabled={isLoading}
                  auto_on={false}
                />

                <Input
                  type="text"
                  name="username"
                  className=" bg-white"
                  label="Username"
                  disabled={isLoading}
                  auto_on={false}
                />
              </div>
              <Input
                type="password"
                name="password"
                className=" bg-white"
                label="Password"
                disabled={isLoading}
                auto_on={false}
              />
              <Input
                type="password"
                name="password2"
                className=" bg-white"
                label="Confirm Password"
                disabled={isLoading}
                auto_on={false}
              />
              {isLoading ? (
                <>
                  <Loader size="lg" />
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="w-full text-lg text-white dark:bg-sky-700 dark:hover:bg-primary-700/90 bg-primary-600 hover:bg-primary-600/90 font-medium rounded  px-5 py-2.5 text-center">
                    Create account
                  </button>
                </>
              )}
              <div>
                <p className="text-center ">
                  Already have an account?{" "}
                  <Link
                    to={"/?login=true"}
                    className="text-primary-500 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-center text-xs ">
                  By creating an account, you agree to our
                  <Link
                    to={"/legal/privacy"}
                    className="text-primary-500 hover:underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Seo>
  );
};

export default SignUpPage;
