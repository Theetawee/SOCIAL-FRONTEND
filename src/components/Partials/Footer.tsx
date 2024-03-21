import { Link } from "react-router-dom"
import Switch from "../common/Switch";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();

  
    return (
      <div>
        <footer className="flex bg-gray-100  justify-center text-sm border-t border-gray-300 dark:border-gray-800  px-8 py-4  dark:bg-gray-900 w-full  items-center gap-x-8 flex-wrap sm:justify-between  gap-y-2 mx-auto p-4">
          <span>
            <Link to={"/"} className="hover:underline hover:text-primary-600">
              {t("Home")}
            </Link>
          </span>
          <span>
            <Link
              to={"/accounts/login"}
              className="hover:underline hover:text-primary-600">
              {t("Login")}
            </Link>
          </span>
          <span>
            <Link
              to={"/accounts/signup"}
              className="hover:underline hover:text-primary-600">
              {t("Register")}
            </Link>
          </span>
          <span>
            <Link
              to={"/legal/privacy"}
              className="hover:underline hover:text-primary-600">
              {t("Privacy Policy")}
            </Link>
          </span>

          <span>
            <Switch />
          </span>
          </footer>
        
      </div>
    );
}

export default Footer
