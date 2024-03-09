import { Link } from "react-router-dom";
import { lazy,useEffect,useState } from "react";
const Seo = lazy(() => import("../../components/utils/Seo"));
const Input = lazy(() => import("../../components/common/Input"));
import useLogin from "../../hooks/Auth/useLogin";
import { FormEvent } from "react";
import { HiOutlineUserAdd } from "react-icons/hi";
import SuspenseLoader from "../../components/utils/SuspenseLoader";
import Loader from "../../components/common/Loader";
import GoogleBtn from "../../components/Partials/Account/GoogleBtn";
import Logo from "../../components/common/Logo";

const LoginPage = () => {
  const { loging: isLoading, LoginUser } = useLogin();

  const [latitude, setLatitude] = useState<number|null>(null);
  const [longitude, setLongitude] = useState<number|null>(null);
  const [error, setError] = useState<string|null>(null);

  const [allowLogin, setAllowLogin] = useState(false);
  

  useEffect(() => {
    const checkPermission = () => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              handleSuccess,
              handleError,
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 1000,
              }
            );
          }
        })
        .catch((error) => {
          console.error("Error checking geolocation permission:", error);
        });
    };

    checkPermission();
  }, []);

  const error_msg="Please allow Waanverse to access your location to continue Enable location access in your browser settings and try again."

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 1000,
      });
    } else {
      setAllowLogin(true);
    }
  };


  const handleSuccess = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setError(null);
    setAllowLogin(true);
  };

  const handleError = (error: GeolocationPositionError) => {
    if (error.PERMISSION_DENIED) {
      setError(error_msg);
      setAllowLogin(false);
    } else if (error.POSITION_UNAVAILABLE) {
      setAllowLogin(true);
      
    } else if (error.TIMEOUT) {
            setError(error_msg
            );

      setAllowLogin(false);
    } else {
      setError(error.message);
      setAllowLogin(false);
    }
  };


  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    await LoginUser(username, password,latitude!,longitude!);
  };

  return (
    <Seo
      title="Waanverse - Sign in"
      description="Sign in to access your account and unlock a world of possibilities. Seamlessly connect with friends, explore personalized content, and stay updated on the latest news. Your journey begins here."
    >
      <section className="flex  items-center flex-col justify-center py-16 px-4">
        <div className="max-w-md py-6   mx-auto rounded-0   w-full bg-white dark:bg-gray-900 shadow  rounded-xl px-2">
          <Link to={"/"} className="flex items-center justify-center mb-5">
            <Logo />
          </Link>
          {allowLogin ? (
            <>
              <form onSubmit={handleSubmit} autoComplete="off" method="post">
                <input
                  autoComplete="false"
                  name="hidden"
                  type="text"
                  style={{ display: "none" }}
                />
                <h1 className="text-primary-500 mb-4  font-medium text-center text-2xl">
                  Sign in to Waanverse
                </h1>
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
                  <div className="flex justify-between">
                    <div>
                      <Link
                        to={"/accounts/reset-password"}
                        className="text-sm text-primary-500 hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full  text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 font-medium rounded  px-5 py-2.5 text-lg text-center"
                    >
                      {isLoading ? <Loader /> : "Sign in"}
                    </button>
                    <div className="inline-flex items-center justify-center w-full">
                      <span className="font-medium">or</span>
                    </div>
                    <GoogleBtn />
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="px-4">
              {error ? (
                <div className="mb-6">
                  <p className="text-red-600 dark:text-red-400 text-lg">
                    {error}
                  </p>
                </div>
              ) : (
                <>
                  <p className="mb-6">
                    We use your location to offer personalized experiences,
                    suggesting nearby events and attractions while prioritizing
                    your safety by alerting you to emergencies or hazards
                    nearby. Your privacy is paramount; we never share your
                    location data without consent. For transparency and trust,
                    we're here to address any concerns.
                  </p>
                  <button
                    type="button"
                    onClick={getLocation}
                    disabled={isLoading}
                    className="w-full text-white bg-primary-600 hover:bg-primary-600/90 dark:bg-primary-700 dark:hover:bg-primary-700/90 rounded px-5 py-2.5 text-lg text-center"
                  >
                    {isLoading ? (
                      <Loader />
                    ) : (
                      "Allow Wannaverse to access your location"
                    )}
                  </button>
                </>
              )}
            </div>
          )}
          <Link
            to={"/accounts/signup"}
            className="text-primary-500 flex justify-center items-center gap-1 text-sm mt-3 hover:underline"
          >
            <HiOutlineUserAdd className="w-5 h-5 inline-block" />
            Create account
          </Link>
        </div>
      </section>
    </Seo>
  );
};

export default LoginPage;
