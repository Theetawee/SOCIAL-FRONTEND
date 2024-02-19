import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";
const LogoutPage = () => {

    const api = useAxios();
    const { unauthenticateUser} = useAuth();
    const navigate = useNavigate();
    const [logingout, setLogingout] = useState(false);

    const handleLogout = async () => {
        setLogingout(true);
        try {
            await api.post("/accounts/logout/");
            unauthenticateUser();
            toast.success('Logout successful');
            navigate("/accounts/login")
        }catch{
            toast.error('Unable to logout, please try again');
        }finally{
            setLogingout(false);
        }
    }




    return (
        <section className="flex items-center flex-col justify-center py-20 px-2">
            <div className="max-w-sm grid grid-cols-1 gap-3 mx-auto rounded-md shadow w-full dark:bg-gray-800 bg-gray-50 px-4 py-10">
                <h1 className="text-xl">Are you sure you want to log out?</h1>
                <p className="mb-6">You can log in again at any time</p>
                <div className="grid grid-cols-1 gap-4">
                    <button onClick={handleLogout} disabled={logingout} className="bg-white border border-gray-100 text-gray-700 px-5 py-2 rounded-full hover:bg-white/90">
                        {logingout ? "Logging out..." : "Log out"}
                    </button>
                    <button disabled={logingout} className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-700/90">
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LogoutPage;
