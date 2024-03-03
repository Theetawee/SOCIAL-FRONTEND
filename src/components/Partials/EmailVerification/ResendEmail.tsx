/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ChangeEvent } from "react";
import Input from "../../common/Input";
import toast from "react-hot-toast";
import Loader from "../../common/Loader";
const baseUrl = import.meta.env.VITE_BASE_URL;
const ResendEmail = () => {
    const [canSend, setCanSend] = useState(() => {
        const time = localStorage.getItem("timestamp");
        if (time) {
            const now = Date.now();
            const diff = now - parseInt(time);
            return diff > 60 * 1000;
        } else {
            return true;
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const [remainingTime, setRemainingTime] = useState(60);
    const [success, setSuccess] = useState(false);

    const handleResend = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.target.email.value;
        setIsLoading(true);
        try {
            const resp = await fetch(`${baseUrl}/accounts/resend_email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });
            if (resp.ok) {
                toast.success("Email sent successfully");
                setSuccess(true);
                const time = Date.now();
                localStorage.setItem("timestamp", time.toString());
                setCanSend(false);
                setRemainingTime(60);
            } else {
                toast.error(
                    `Something went wrong or ${email} is already verified`
                );
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let countdownInterval: any;

        if (!canSend) {
            countdownInterval = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime === 0) {
                        setCanSend(true);
                        return 60;
                    } else {
                        return prevTime - 1;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(countdownInterval);
    }, [canSend]);

    return (
        <div>
            <p className=" text-xl mb-4">Activate your account</p>
            <p className="  mb-4">Resend Account activation link</p>
            {canSend ? (
                <>
                    <form method="post" onSubmit={handleResend}>
                        <Input
                            type="email"
                            
                            name="email"
                            label="Email"
                            disabled={isLoading}
                            required={true}
                        />
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-primary-600 hover:bg-primary-700 text-white  py-2 text-sm px-5 rounded"
                            >
                                {isLoading ? <Loader /> : "Resend"}
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    {success ? (
                        <p className="text-sm text-gray-600">
                            <span className="text-green-500">
                                Email sent successfully.
                            </span>{" "}
                            You Can request again after {remainingTime} seconds
                        </p>
                    ) : (
                        <p className="text-sm text-gray-600">
                            Can request again after {remainingTime} seconds
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default ResendEmail;
