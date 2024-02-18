import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";

interface ContextData {
    component: ReactNode;
    setComponent: Dispatch<SetStateAction<ReactNode>>;
}

export const SideBarContext = createContext<ContextData>({
    component: null,
    setComponent: () => {},
});

const SideBarContextProvider = ({ children }: { children: ReactNode }) => {
    const [component, setComponent] = useState<ReactNode | null>(null);

    const ContextData: ContextData = {
        component,
        setComponent,
    };

    return (
        <SideBarContext.Provider value={ContextData}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarContextProvider;
