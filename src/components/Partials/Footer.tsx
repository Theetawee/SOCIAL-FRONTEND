import { Link } from "react-router-dom";
import Switch from "../common/Switch";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="flex max-w-screen-md   justify-center text-sm border-t-0 border-gray-300 dark:border-gray-800   w-full  items-center gap-x-8 flex-wrap sm:justify-between  gap-y-2 mx-auto p-4">
        <span>
          <Link to={"/"} className="hover:underline hover:text-primary-600">
            {t("Home")}
          </Link>
        </span>
        <span>
          <Link
            to={"/?login=true"}
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
};

export default Footer;
