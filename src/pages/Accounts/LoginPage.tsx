import { Link } from "react-router-dom";
import { lazy } from "react";
const Seo = lazy(() => import("../../components/utils/Seo"));
const Input = lazy(() => import("../../components/common/Input"));
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent } from "react";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
import GoogleBtn from "../../components/Partials/Account/GoogleBtn";
import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";

const LoginPage = () => {
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
      description="Sign in to access your account and unlock a world of possibilities. Seamlessly connect with friends, explore personalized content, and stay updated on the latest news. Your journey begins here.">
      <section className="py-16 px-6">
        <div className="bg-white shadow  dark:bg-gray-900 max-w-screen-lg rounded-3xl mx-auto">
          <div className="px-4 py-2">
            <h1>Log in to your Waanverse Account</h1>
          </div>
          <hr className="h-px dark:bg-gray-800 border-0 bg-gray-200" />
          <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-x-20">
              <div>
                <div>
                  <Link
                    to={"/"}
                    className="flex items-center justify-center w-1/2 mx-auto mb-5">
                    <Logo className="w-20" />
                  </Link>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <p>Or </p>
                </div>
                <GoogleBtn />
                <div className="my-4">
                  <p className="text-center text-gray-500">
                    or{" "}
                    <Link
                      to={"/accounts/signup"}
                      className="text-primary-500 hover:underline">
                      create an account
                    </Link>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
                    <SuspenseLoader>
                      <Input
                        type="text"
                        name="username"
                        label="Username or Email"
                        disabled={isLoading}
                        auto_on={true}
                      />
                    </SuspenseLoader>
                    <SuspenseLoader>
                      <Input
                        type="password"
                        name="password"
                        label="Password"
                        disabled={isLoading}
                        auto_on={false}
                      />
                    </SuspenseLoader>
                    <div className="flex items-center gap-4 justify-between">
                      <div>
                        <Link
                          to={"/accounts/reset-password"}
                          className="text-sm italic text-primary-500 hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-1/2 text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 font-medium rounded  px-5 py-2.5 text-center"
                        label="Sign in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Seo>
  );
};

export default LoginPage;
