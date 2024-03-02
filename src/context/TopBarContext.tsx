import { Dispatch, SetStateAction, createContext, useState } from "react";



interface TopBarContextType {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    back: boolean;
    setBack: Dispatch<SetStateAction<boolean>>
}




export const TopBarContext = createContext<TopBarContextType>({
    title: "",
    setTitle: () => { },
    back: false,
    setBack: () => { }
});



const TopBarProvider = ({children}: {children: React.ReactNode}) => {

    const [title, setTitle] = useState<string>("");
    const [back, setBack] = useState<boolean>(false);



    return (
        <TopBarContext.Provider value={{
            title,
            setTitle,
            back,
            setBack
        }}>
            {children}
        </TopBarContext.Provider>
    )




}


export default TopBarProvider;
