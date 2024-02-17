import { ReactNode, createContext, useState } from "react";


interface NotificationContextType {
    notifications: number
}

export const NotificationContext = createContext<NotificationContextType>({
    notifications: 0,
})


const NotificationProvider = ({ children }: { children: ReactNode }) => {

    const [notifications] = useState<number>(1)

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
