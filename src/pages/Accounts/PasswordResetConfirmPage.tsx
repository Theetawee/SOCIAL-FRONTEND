import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Input from "../../components/common/Input";
import Seo from "../../components/utils/Seo";
import Button from "../../components/common/Button";
const baseUrl = import.meta.env.VITE_BASE_URL;

const PasswordResetConfirmPage = () => {
    const uid = useParams().uid;
    const token = useParams().token;

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const ResetPasswordConfirm = async (formData: {
        new_password1: string;
        new_password2: string;
        uid: string;
        token: string;
    }) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${baseUrl}/accounts/password/reset/confirm/`,
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
                toast.success("Password reset successful. You can now log in.");
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
        const new_password1 = data.get("new_password1") as string;
        const new_password2 = data.get("new_password2") as string;
        if (new_password1 !== new_password2) {
            toast.error("Passwords do not match");
            return;
        }

        ResetPasswordConfirm({
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid!,
            token: token!,
        });
    };

    return (
      <Seo title="Change your Password" description="Confirm your new password">
        <section className="flex items-center justify-center h-screen px-4">
          <div className="w-full">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="max-w-md grid grid-cols-1 gap-8 mx-auto"
            >
              <h1 className="text-xl">
                Almost there...
                <br />
                Enter your new password.
              </h1>

              <Input
                type="password"
                name="new_password1"
                label="New password"
                disabled={isLoading}
                className="bg-gray-50 dark:bg-gray-900"
              />
              <Input
                type="password"
                name="new_password2"
                label="Confirm new password"
                disabled={isLoading}
                className="bg-gray-50 dark:bg-gray-900"
              />
              <Button
                type="submit"
                disabled={isLoading}
                            className="text-white dark:bg-gray-700 hover:bg-gray-900/90 bg-gray-900 py-2 px-5  rounded"
                            label="Reset"
              />
              
            </form>
          </div>
        </section>
      </Seo>
    );
};

export default PasswordResetConfirmPage;
