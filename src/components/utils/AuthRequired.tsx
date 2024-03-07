import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const AuthRequired = () => {
    const { isAuthenticated } = useAuth();

    const location = useLocation();

    const from = encodeURIComponent(location.pathname) || "/";

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to={`/accounts/login?next=${from}`} />;
    }
};

export default AuthRequired;
