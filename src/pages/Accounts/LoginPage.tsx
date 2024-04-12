import { Link } from "react-router-dom";
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent } from "react";
import GoogleBtn from "../../components/Partials/Account/GoogleBtn";
import Button from "../../components/common/Button";
import Seo from "../../components/utils/Seo";
import Input from "../../components/common/Input";

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
      <section className="py-6">
        <div className="">
          <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
            <div className="grid grid-cols-1 max-w-md bg-gray-900/20 p-8 rounded-md shadow border border-gray-700/40 mx-auto">
              <div className="py-4">
                <div className="mb-8">
                  <p className="text-3xl mb-2">
                    Sign in
                  </p>
                  <p>Stay updated on your social life</p>
                </div>

                <div className=" bg-white flex items-center gap-x-2 justify-center px-4 py-2 rounded-md">
                  <GoogleBtn text/>
                </div>
              </div>
              <div>
                <div>
                  <div className="grid grid-cols-1 gap-6 py-4">
                      <Input
                        type="text"
                        name="username"
                        label="Username or Email"
                        disabled={isLoading}
                        auto_on={true}
                        className="mx-2 rounded-full bg-gray-900"
                      />
                      <Input
                        type="password"
                        name="password"
                        label="Password"
                        disabled={isLoading}
                        auto_on={false}
                        className="bg-gray-900 mx-2 rounded-full"
                      />
                      <div>
                      <Link
                          to={"/accounts/reset-password"}
                          className=" text-primary-500 hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                    <div>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 font-medium rounded  px-5 py-2.5 text-center"
                        label="Log in"
                      />
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-4 gap-x-2">
              <p>New to Waanverse?</p>
              <Link
                            to={"/accounts/signup"}
                            className="text-primary-500 hover:underline">
                            Join now
                          </Link>
            </div>
          </form>
        </div>
      </section>
    </Seo>
  );
};

export default LoginPage;
