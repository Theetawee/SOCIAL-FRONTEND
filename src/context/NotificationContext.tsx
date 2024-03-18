import { ReactNode, createContext, useEffect, useState } from "react";
import useAuth from "../hooks/Auth/useAuth";

interface NotificationContextType {
    notifications: number
}

export const NotificationContext = createContext<NotificationContextType>({
    notifications: 0,
})


const NotificationProvider = ({ children }: { children: ReactNode }) => {

    const { isAuthenticated} = useAuth();

    
    const [notifications,setNotifications] = useState<number>(1);

    useEffect(() => {   
        if (isAuthenticated) {
            const NotificationUrl =
                process.env.NODE_ENV === "production"
                    ? "wss://abs.waanverse.com/ws/notifications/"
                    : "ws://localhost:8001/ws/notifications/";

            const socket = new WebSocket(NotificationUrl);
        

            socket.onopen = () => {
            };

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);

                setNotifications(data.count)
            };

            socket.onclose = () => {
                console.log("WebSocket connection closed.");
            };

            // Cleanup function to close WebSocket connection when component unmounts
            return () => {
                if (socket && socket.readyState === WebSocket.OPEN) {
                    socket.close();
                }
            };
        }

    }, [isAuthenticated]);

    const context_data = {
        notifications,
    }

    return (
        <NotificationContext.Provider value={context_data}>
            {children}
        </NotificationContext.Provider>
    )


}

export default NotificationProvider;
