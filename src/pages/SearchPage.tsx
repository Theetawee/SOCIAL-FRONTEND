import { useParams } from "react-router-dom";
import IntroSearch from "../components/Partials/IntroSearch";
import Seo from "../components/utils/Seo";

const SearchPage = () => {

    const {query } = useParams();





    return (
      <Seo title="Search - Waanverse" description="Search anything within Waanverse without any borders.">
    <section className="px-4 py-16 min-h-screen">
          <div className="flex items-center justify-center py-20">
              <h1 className="text-2xl text-center">No Results found for  "{query }"</h1>
          </div>
          <IntroSearch/>
            </section>
            </Seo>
  );
};

export default SearchPage;
