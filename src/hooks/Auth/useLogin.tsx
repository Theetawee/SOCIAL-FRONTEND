/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogin = () => {
    const [loging, setLoging] = useState(false);
    const api = useAxios();
    const navigate = useNavigate();
    const { authenticateUser } = useAuth();

    const LoginUser = async (username: string, password: string) => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/login/", {
                username,
                password,
            });

            const data = response.data;
            toast.success("Login successful");
            authenticateUser(data.access)
            navigate("/");
        } catch (error: any) {
            if (error.response.data.non_field_errors) {
                if (
                    error.response.data.non_field_errors[0] ===
                    "E-mail is not verified."
                ) {
                    navigate("/accounts/verify-email?redirect_login=true");
                }
            } else {
                toast.error("Unable to login with the provided credentials");
            }
        } finally {
            setLoging(false);
        }
    };

    return {
        LoginUser,
        loging,
    };
};

export default useLogin;
