import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to="/home" />;
    } else {
        return <Outlet />;
    }
};

export default ProtectedRoute;
