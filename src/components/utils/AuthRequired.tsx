import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
const accounts_url = import.meta.env.VITE_ACCOUNTS_URL;
const app_url = import.meta.env.VITE_APP_URL;

const AuthRequired = () => {
    const { isAuthenticated } = useAuth();

    const redirect_url = `${accounts_url}/account/home?redirect_uri=${app_url}&callback=true&app_name=Waanverse-Chirp`;

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        window.location.href = redirect_url;
    }
};

export default AuthRequired;
