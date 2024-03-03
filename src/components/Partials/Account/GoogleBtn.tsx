import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const redirect_url = import.meta.env.VITE_GOOGLE_REDIRECT;
const google_id = import.meta.env.VITE_GOOGLE_ID;


const GoogleBtn = () => {


const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_url}&prompt=consent&response_type=code&client_id=${google_id}&scope=openid%20email%20profile&access_type=offline`;




    return (
        <Link
            to={GOOGLE_URL}
            className="w-full flex dark:bg-gray-800 items-center justify-center text-gray-700 dark:text-white border dark:border-gray-800 dark:hover:bg-gray-800/70 font-medium rounded text-lg px-5 py-2.5 text-center"
        >
            <FcGoogle className="w-5 h-5 mr-3" />
            Sign in with Google
        </Link>
    );
};

export default GoogleBtn;
