import Input from '../../components/common/Input';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../components/common/Loader";
import { useState } from "react";
const baseUrl = import.meta.env.VITE_BASE_URL;

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const ResetPassword = async (formData: { email: string }) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${baseUrl}/accounts/password/reset/`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if (response.ok) {
                toast.success(
                    "Password reset email sent. Please check your inbox."
                );
                navigate("/accounts/login/");
                return;
            } else {
                toast.error("Something went wrong. Please try again later.");
                return;
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get("email") as string;
        ResetPassword({ email: email });
    };

    return (
        <>
            <section className="flex items-center justify-center h-screen px-4">
                <div className="w-full max-w-md">
                    <h1 className="mb-10 text-xl">
                        Forgot your password? Dont fret we got your back.
                        <br />
                        Enter your email and we will send you a link to reset
                        your password.
                    </h1>
                    <form
                        method="post"
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto"
                    >
                        <Input
                            type="email"
                            name="email"
                            label="Email Address"
                            disabled={isLoading}
                            id='email'
                            className='bg-gray-50 dark:bg-gray-900'
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="text-white dark:bg-gray-700 hover:bg-gray-900/90 bg-gray-900 py-2 px-5 mt-8 rounded"
                        >
                            {isLoading ? <Loader  /> : "Submit"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ResetPasswordPage;
