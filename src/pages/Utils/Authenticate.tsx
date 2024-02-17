import { useEffect, useRef } from "react";
import Loader from "../../components/common/Loader";
import Seo from "../../components/utils/Seo";
import { TokenData, UserType } from "../../hooks/types";
import { jwtDecode } from "jwt-decode";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

const AuthenticatePage = () => {
    const api = useAxios();
    const navigate = useNavigate();

    const { setUser } = useAuth();

    const effectRan = useRef(false);

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const resp = await api.post("/accounts/token/refresh/");
                const data = resp.data;
                localStorage.setItem("user", "true");
                const token_data: TokenData = jwtDecode(data.access);
                const user: UserType = {
                    username: token_data.username,
                    name: token_data.name,
                    image: token_data.image,
                    image_hash: token_data.image_hash,
                    email: token_data.email,
                    user_id: token_data.user_id,
                };
                setUser(user);
            } catch {
                localStorage.clear();
            } finally {
                navigate("/");
            }
        };
        if (effectRan.current === false) {
            refreshToken();
            effectRan.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Seo title="Redirecting..." description="Redirecting to Waanverse Chirp app...">
            <section>
                <div>
                    <Loader fill="primary-600" />
                </div>
            </section>
        </Seo>
    );
};

export default AuthenticatePage;
