import { createContext, useState, useEffect, ReactNode } from "react";

interface DrawerContextProps {
    toggleSidebar: () => void;
    showDrawer: boolean;
    isOpen: boolean;
}

export const DrawerContext = createContext({
    toggleSidebar: () => {},
    showDrawer: false,
    isOpen: false,
});


interface DrawerProviderProps {
    children: ReactNode;
}





 const DrawerProvider = ({ children }: DrawerProviderProps) => {
    const sm = 640;
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const showDrawer: boolean = windowWidth >= sm;
    const [isOpen, setIsOpen] = useState<boolean>(showDrawer);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsOpen(showDrawer);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth, showDrawer, isOpen]);

    const toggleSidebar = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const contextData: DrawerContextProps = {
        toggleSidebar: toggleSidebar,
        showDrawer: showDrawer,
        isOpen: isOpen,
    };

    return (
        <DrawerContext.Provider value={contextData}>
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerProvider;
