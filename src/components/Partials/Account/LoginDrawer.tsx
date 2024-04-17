import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Input from '../../common/Input';
import useLogin from '../../../hooks/Auth/useLogin';
import { FormEvent } from 'react';
const LoginDrawer = () => {


    const { loging: isLoading, LoginUser } = useLogin();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const username = e.currentTarget.username.value;
      const password = e.currentTarget.password.value;
      await LoginUser(username, password);
    };
  



  return (
    <div onClick={(e) => e.stopPropagation()}>
      {/* drawer component */}
      <div
        id="drawer-bottom-example"
        className="fixed bottom-0 text-gray-800 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-gray-100 transform-none"
        tabIndex={-1}
        aria-labelledby="drawer-bottom-label">
            <form onSubmit={handleSubmit} autoComplete="off" method="post">
            <input
              autoComplete="false"
              name="hidden"
              type="text"
              style={{ display: "none" }}
            />
            <div className="grid grid-cols-1 max-w-md bg-white py-4 px-8 rounded-md shadow border border-gray-100 mx-auto">
              <div className="py-4">
                <div className='text-gray-700'>
                  <p className="text-3xl mb-2">
                    Sign in
                  </p>
                  <p>Stay updated on your social life</p>
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
                        className="mx-2 rounded-full bg-white"
                      />
                      <Input
                        type="password"
                        name="password"
                        label="Password"
                        disabled={isLoading}
                        auto_on={false}
                        className="bg-white mx-2 rounded"
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
    </div>
  );
};

export default LoginDrawer;
