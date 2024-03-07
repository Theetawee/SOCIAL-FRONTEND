import { useSearchParams } from "react-router-dom";
import IntroSearch from "../components/Partials/IntroSearch";
import Seo from "../components/utils/Seo";
import { useQuery } from "@tanstack/react-query";
import Endpoints from "../hooks/Main/Endpoints";
import Loader from "../components/common/Loader";
import { useState } from "react";
import AccountResults from "../components/Partials/Account/AccountResults";
import PostResults from "../components/Partials/Post/PostResults";

const SearchPage = () => {

  const { searchWaanverse} = Endpoints();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('q')
  
  

  const [display, setDisplay] = useState("posts");
  
  

  const { isLoading,data,isError} = useQuery({
    queryKey: ['search', query],
    queryFn:()=>searchWaanverse(query!),
  });

  let content;
  if (isLoading) {
    content = (
      <>
        <div>
          <Loader />
          <p className="text-center mt-3">Searching Waanverse for "{query}"</p>
        </div>
      </>
    )
  } else if (isError) {
    content = (
      <>
        <div>
          <p className="text-center text-2xl">Something went wrong. Please try again</p>
        </div>
        <IntroSearch/>
      </>
    )
  } else { 
    content = (<>
      <div className="py-4">
        <IntroSearch />
        </div>
      <div className="flex text-lg items-center mb-6 justify-between max-w-lg mx-auto gap-10">

        <div>
          <button className={`text-center ${display==="posts"?"text-primary-500 font-medium":""}`} onClick={()=>setDisplay("posts")}>Posts</button>
        </div>
        <div>
          <button className={`text-center ${display==="accounts"?"text-primary-500 font-medium":""}`} onClick={()=>setDisplay("accounts")}>Accounts</button>
        </div>

      </div>
      <div>
          {display==="accounts"?(<AccountResults data={data!.accounts}/>):(<PostResults data={data!.posts}/>)}
      </div></>
    )
  }
    
  


    return (
      <Seo title="Search - Waanverse" description="Search anything within Waanverse without any borders."><section className="p-4 min-h-screen">
        {content}
        </section>
      </Seo>
    );
  
};

export default SearchPage;
