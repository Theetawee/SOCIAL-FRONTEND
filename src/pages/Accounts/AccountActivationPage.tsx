import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import toast from "react-hot-toast";

const AccountActivationPage = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const effectRan=useRef(false)
    useEffect(() => {
        if(effectRan.current) return
        if (token) {
            const activate = async () => {
                try {
                    const resp = await fetch(
                        `${import.meta.env.VITE_BASE_URL}/accounts/activate/`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                key: token,
                            }),
                        }
                    );
                    if (resp.ok) {
                        toast.success("Account activated successfully");
                        return navigate("/accounts/login");
                    } else {
                        await resp.json()
                        toast.error("Unable to activate account");
                        return navigate("/verify-email?redirect_login=true");
                    }
                } catch (error) {
                    toast.error("Unable to activate account");
                    return navigate("/verify-email?redirect_login=true");
                }
            };
            activate();
        } else {
            navigate("/verify-email?redirect_login=true");
        }
        effectRan.current=true
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <section className="h-screen flex items-center justify-center ">
            <div>
                <Loader />
                <p className="text-gray-700">Activating account</p>
            </div>
        </section>
    );
};

export default AccountActivationPage;
