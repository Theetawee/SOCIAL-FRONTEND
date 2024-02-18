import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import DrawerProvider from "./DrawerContext";
import { ThemeProvider } from "./ThemeContext";
import NotificationProvider from "./NotificationContext";
import SideBarContextProvider from "./SidebarContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <AuthContextProvider>
                <DrawerProvider>
                    <SideBarContextProvider>
                        <HelmetProvider>
                            <QueryClientProvider client={new QueryClient()}>
                                <NotificationProvider>
                                    {children}
                                </NotificationProvider>
                            </QueryClientProvider>
                        </HelmetProvider>
                    </SideBarContextProvider>
                </DrawerProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
};

export default ContextProvider;
