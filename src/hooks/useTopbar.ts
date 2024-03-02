import { useContext, useEffect } from "react";
import { TopBarContext } from "../context/TopBarContext";

const useTopbar = (page_title: string, back: boolean) => {
    const { setTitle, setBack } = useContext(TopBarContext);

    useEffect(() => {
        setTitle(page_title);
        setBack(back);
        return () => {
            setBack(false);
            setTitle("");
        };
    }, [back, page_title, setBack, setTitle]);
};

export default useTopbar;
