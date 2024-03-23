import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const redirect_url = import.meta.env.VITE_GOOGLE_REDIRECT;
const google_id = import.meta.env.VITE_GOOGLE_ID;


const GoogleBtn = () => {

    const {t } = useTranslation();


const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_url}&prompt=consent&response_type=code&client_id=${google_id}&scope=openid%20email%20profile&access_type=offline`;




    return (
        <Link
            to={GOOGLE_URL}
            className="w-full flex dark:bg-white items-center justify-center text-gray-700 dark:text-gray-800 border  dark:border-gray-900 hover:bg-gray-100 border-gray-400  font-medium rounded-md max-w-[250px] mx-auto text-lg py-2.5 text-center"
        >
            <FcGoogle className="w-5 h-5 mr-3" />
            {t("Sign in with Google")}
        </Link>
    );
};

export default GoogleBtn;
