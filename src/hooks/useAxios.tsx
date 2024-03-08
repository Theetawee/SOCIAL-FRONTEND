import axios, { AxiosInstance } from "axios";
const baseUrl: string = import.meta.env.VITE_BASE_URL;
import useAuth from "./Auth/useAuth";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
    const navigate = useNavigate();
    const { setUser, setIsAuthenticated } = useAuth();

    const logout = () => {
        setUser(null);
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/accounts/login");
    };

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    // Add interceptor for 401 Unauthorized errors
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            // Check if the error is due to an expired access token (status code 401)
            if (
                error.response &&
                error.response.status === 401 &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true;
                try {
                    await fetch(`${baseUrl}/accounts/token/refresh/`, {
                        method: "POST",
                        credentials: "include",
                    });

                } catch (err) {
                    logout();
                    return Promise.reject(error);
                }
            }

            // If the error is not due to a 401 status code, reject the promise
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxios;
