import { SearchResultsType } from "../types";
import useAxios from "../useAxios"

const Endpoints = () => {

    const api = useAxios();

    const searchWaanverse=async(serachTerm:string):Promise<SearchResultsType>=>{
        const response = await api.get(`/search/?query=${serachTerm}`)
        
        return response.data;
    }

    return {
      searchWaanverse
  }
}

export default Endpoints