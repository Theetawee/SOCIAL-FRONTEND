import { NotificationResponseType, SearchResultsType } from "../types";
import useAxios from "../useAxios"

const Endpoints = () => {

    const api = useAxios();

  const searchWaanverse = async (serachTerm: string): Promise<SearchResultsType|void> => {
      if(serachTerm.replace(" ", "") === "" || serachTerm === null) return;
        const response = await api.get(`/search/?query=${serachTerm}`)
        
        return response.data;
  }
  
  const getNotifications = async (pageNum=1): Promise<NotificationResponseType> => { 
    const response = await api.get(`/notifications/?page=${pageNum}`)
    return response.data
  }

    return {
      searchWaanverse,
      getNotifications
  }
}

export default Endpoints