import Input from '../../components/common/Input';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Seo from '../../components/utils/Seo';
import Button from '../../components/common/Button';
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
                navigate("/?login=true");
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
      <Seo
        title="Reset Password - Waanverse"
        description="Reset your password securely and regain access to your account. Follow the simple steps to reset your password and ensure the security of your account on Waanverse. Don't worry if you've forgotten your password; we've got you covered."
      >
        <section className="flex text-white py-16 items-center justify-center px-4">
          <div className="w-full max-w-screen-lg mx-auto">
            <h1 className="mb-4 text-xl text-center">
              Forgot your password? Dont fret we got your back.
              <br />
              Enter your email and we will send you a link to reset your
              password.
            </h1>
            <form
              method="post"
              onSubmit={handleSubmit}
              className="max-w-md bg-white p-6 dark:bg-gray-900 rounded-xl mx-auto"
            >
              <Input
                type="email"
                name="email"
                label="Email Address"
                disabled={isLoading}
                className="bg-gray-50 dark:bg-gray-900"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="text-white dark:bg-gray-700 hover:bg-gray-900/90 bg-gray-900 py-2 px-5 mt-8 rounded" label='Submit'
              />
              
            </form>
          </div>
        </section>
      </Seo>
    );
};

export default ResetPasswordPage;
