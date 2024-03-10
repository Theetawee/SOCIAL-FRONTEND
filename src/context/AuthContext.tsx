import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";
import LoadingState from "../components/common/LoadingState";
import { UserType } from "../hooks/types";
const baseURL = import.meta.env.VITE_BASE_URL;
import useIsOnline from "../hooks/useIsOnline";
import OfflineAlert from "../components/utils/OfflineAlert";

interface AuthContextType {
    user: UserType | null;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<UserType | null>>;
    setFastRefresh: Dispatch<SetStateAction<boolean>>;
    unauthenticateUser: () => void;
    authenticateUser: (user: UserType) => void,
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    setUser: () => {},
    setFastRefresh: () => { },
    unauthenticateUser: () => { },
    authenticateUser: () => { },
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("user") === "true";
    });
    const [isLoading, setIsLoading] = useState(true);
    const [fastRefresh, setFastRefresh] = useState(false);
    const isOnline = useIsOnline();

    const authenticateUser = (user:UserType) => {
        setUser(user);
        setIsLoading(false);
        setFastRefresh(false);
        localStorage.setItem("user", "true");
        setIsAuthenticated(true);
    }

    const unauthenticateUser = () => {
        localStorage.removeItem("user");
        setUser(null);
        setIsLoading(false);
        setIsAuthenticated(false);
    }

    

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch(`${baseURL}/accounts/me/`, {
                    method: "GET",
                    credentials: "include",
                })
                const data = await response.json();
                authenticateUser(data);

            }catch {
                unauthenticateUser();
            }
        }
        const RefreshTokens = async () => {
            try {
                const resp=await fetch(`${baseURL}/accounts/token/refresh/`, {
                    method: "POST",
                    credentials: "include",
                });
                if (resp.ok) {
                    await getUserInfo();
                } else {
                    unauthenticateUser();
                }

            } catch {
                unauthenticateUser();
            }
        };
        if (isAuthenticated  || fastRefresh) {
            RefreshTokens();
        } else {
            setIsLoading(false);
        }
    }, [fastRefresh, isAuthenticated]);


    const contextData = {
        isAuthenticated,
        user,
        setIsAuthenticated,
        setUser,
        setFastRefresh,
        authenticateUser,
        unauthenticateUser,
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
