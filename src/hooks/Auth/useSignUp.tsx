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
    const [errors, setErrors] = useState<string[]>([]);

    const [isLoading, setIsLoading] = useState(false);
    const api = useAxios();

    const signup = async (data: DataType) => {
        setIsLoading(true);
        try {
            await api.post("/accounts/signup/", data);
            navigate("/accounts/verify-email?redirect_login=false");
            toast.success("Signup successful");
            console.log('set')

        } catch (error: any) {
            const errorList=[];
            if (error.response.data.email) {
                errorList.push(error.response.data.email[0]);
                setErrors(errorList);
            } if (error.response.data.username) {
                errorList.push(error.response.data.username[0]);
                setErrors(errorList);
            }if(error.response.data.password1){
                errorList.push(error.response.data.password1[0]);
                setErrors(errorList);
            }if(error.response.data.non_field_errors){
                errorList.push(error.response.data.non_field_errors[0]);
                setErrors(errorList);
            }
            toast.error("Signup failed");
        } finally {
            setIsLoading(false);
        }
    };

    return { signup, isLoading,errors };
};

export default useSignup;
