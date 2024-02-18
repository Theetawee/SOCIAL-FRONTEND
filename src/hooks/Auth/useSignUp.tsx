/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


interface DataType {
    email: string;
    password1: string;
    password2: string;
    username: string;
    name: string;
}

const useSignup = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const api = useAxios();

    const signup = async (data: DataType) => {
        setIsLoading(true);
        try {
            await api.post("/accounts/signup/", data);
            navigate("/accounts/verify-email?redirect_login=false");
            toast.success("Signup successful");

        } catch (error: any) {
            console.log(error);
            toast.error("Signup failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading };
};

export default useSignup;
