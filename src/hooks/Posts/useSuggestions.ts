import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";
import { useQuery } from "@tanstack/react-query";
import Endpoints from "./Endpoints";

const useSuggestions = () => {

const [suggest, setSuggest] = useState("");
    const value = useDebounce(suggest, 500);

    const debouncedVal = value.split(" ").join("").replace("@","");

    const { getTagSuggestions} = Endpoints();

const handleGetSuggestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuggest(e.target.value);
};


    const { data,isPending,isError} = useQuery({
        queryKey: ["suggestions",debouncedVal],
        queryFn: () => getTagSuggestions(debouncedVal)
    })





useEffect(() => {
    if (debouncedVal) {
        console.log(debouncedVal);
    }
}, [debouncedVal]);


    return {
        handleGetSuggestion,
        suggest,
        data,isError,isPending,setSuggest
    }

}

export default useSuggestions
