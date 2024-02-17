import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            <HelmetProvider>
                        <QueryClientProvider client={new QueryClient()}>
                                    {children}
                        </QueryClientProvider>
            </HelmetProvider>
        </AuthContextProvider>
    );
};

export default ContextProvider;
