import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";
import { jwtDecode } from "jwt-decode";
import LoadingState from "../components/common/LoadingState";
import { UserType, TokenData } from "../hooks/types";
const baseURL = import.meta.env.VITE_BASE_URL;
import useIsOnline from "../hooks/useIsOnline";
import OfflineAlert from "../components/utils/OfflineAlert";

interface AuthContextType {
    user: UserType | null;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<UserType | null>>;
    setFastRefresh: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    setUser: () => {},
    setFastRefresh: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("user") === "true";
    });
    const [isLoading, setIsLoading] = useState(true);
    const [fastRefresh, setFastRefresh] = useState(false);
    const isOnline = useIsOnline();
    useEffect(() => {
        const RefreshTokens = async () => {
            const response = await fetch(`${baseURL}/accounts/token/refresh/`, {
                method: "POST",
                credentials: "include",
            });
            if (response.status !== 200) {
                localStorage.clear();
                setUser(null);
                setIsLoading(false);
                setIsAuthenticated(false);
            } else {
                const data = await response.json();
                const token_data: TokenData = jwtDecode(data.access);
                const user = {
                    username: token_data.username,
                    email: token_data.email,
                    name: token_data.name,
                    image: token_data.image,
                    image_hash: token_data.image_hash,
                    user_id: token_data.user_id,
                };
                setUser(user);
                setIsLoading(false);
                localStorage.setItem("user", "true");
            }
        };

        RefreshTokens();
    }, []);

    useEffect(() => {
        const RefreshTokens = async () => {
            const response = await fetch(`${baseURL}/accounts/token/refresh/`, {
                method: "POST",
                credentials: "include",
            });
            if (response.status !== 200) {
                localStorage.clear();
                setUser(null);
                setIsLoading(false);
                setIsAuthenticated(false);
            } else {
                const data = await response.json();
                const token_data: TokenData = jwtDecode(data.access);
                const user = {
                    username: token_data.username,
                    email: token_data.email,
                    name: token_data.name,
                    image: token_data.image,
                    image_hash: token_data.image_hash,
                    user_id: token_data.user_id,
                };
                setUser(user);
                setIsLoading(false);
                localStorage.setItem("user", "true");
            }
        };

        if (fastRefresh) {
            RefreshTokens();
            setFastRefresh(false);
        }
    }, [fastRefresh]);

    const contextData = {
        isAuthenticated,
        user,
        setIsAuthenticated,
        setUser,
        setFastRefresh,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {!isOnline && (
                <>
                    <OfflineAlert />
                </>
            )}
                <>{isLoading ? <LoadingState /> : <>{children}</>}</>

        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
