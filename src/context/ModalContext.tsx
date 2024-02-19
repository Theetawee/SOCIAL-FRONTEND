import { createContext, useState, ReactNode, useEffect } from "react";

interface ModalContext {
    isOpen: boolean;
    toggleModal: () => void;
}

export const ModalContext = createContext<ModalContext>({
    isOpen: false,
    toggleModal: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        // Cleanup function to reset the body overflow when the component is unmounted
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

    const contextData: ModalContext = {
        isOpen,
        toggleModal,
    };

    return (
        <ModalContext.Provider value={contextData}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
