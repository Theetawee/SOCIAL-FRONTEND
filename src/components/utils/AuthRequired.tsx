import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const AuthRequired = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to={"/accounts/login"} />;
    }
};

export default AuthRequired;
