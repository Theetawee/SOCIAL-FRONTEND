import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DrawerProvider from "./DrawerContext";
import { ThemeProvider } from "./ThemeContext";
import NotificationProvider from "./NotificationContext";
import SideBarContextProvider from "./SidebarContext";
import ModalProvider from "./ModalContext";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TopBarProvider from "./TopBarContext";
import { HelmetProvider } from "react-helmet-async";



const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <AuthContextProvider>
                <TopBarProvider>
                <DrawerProvider>
                    <HelmetProvider>
                    <SideBarContextProvider>
                            <QueryClientProvider client={new QueryClient()}>
                                <NotificationProvider>
                                    <ModalProvider>{children}</ModalProvider>
                                </NotificationProvider>
                                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                            </QueryClientProvider>
                    </SideBarContextProvider>
                    </HelmetProvider>
                    </DrawerProvider>
                </TopBarProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
};

export default ContextProvider;
