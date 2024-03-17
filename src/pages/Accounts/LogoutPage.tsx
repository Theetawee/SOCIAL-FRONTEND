import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "../../components/common/Button";
const LogoutPage = () => {
  const api = useAxios();
  const { unauthenticateUser } = useAuth();
  const navigate = useNavigate();
  const [logingout, setLogingout] = useState(false);

  const handleLogout = async () => {
    setLogingout(true);
    try {
      await api.post("/accounts/logout/");
      unauthenticateUser();
      toast.success("Logout successful");
      navigate("/");
    } catch {
      toast.error("Unable to logout, please try again");
    } finally {
      setLogingout(false);
    }
  };

  return (
    <section className="flex items-center flex-col justify-center py-24 px-2">
      <div className="max-w-lg grid text-center grid-cols-1 gap-3 mx-auto rounded-md   w-full dark:bg-gray-900 bg-gray-50 shadow px-4 py-10">
        <h1 className="text-2xl">Are you sure you want to log out?</h1>
        <p className="mb-6">You can log in again at any time</p>
        <div className="flex max-w-sm mx-auto items-center justify-between gap-6 font-medium">
          <Button
            onClick={handleLogout}
            disabled={logingout}
            label="Log out"
            className="bg-white border text-lg border-gray-300 text-gray-900  px-5 py-2 rounded hover:bg-white/90"
          />
          <button
            className="bg-gray-900 border-gray-500 border text-white px-5 text-lg py-2 rounded hover:bg-gray-900/90"
            onClick={() => navigate(-1)}>Cancel</button>
          
        </div>
      </div>
    </section>
  );
};

export default LogoutPage;
