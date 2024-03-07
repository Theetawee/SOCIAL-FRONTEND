import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const IntroSearch = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    e.currentTarget.query.value = "";
    return navigate(`/search/?q=${query}`)
  }





  return (
    <section>
      <div>
        <form method="GET" onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
              <FaSearch className="w-6 h-6 text-gray-700 dark:text-gray-700"/>
            </div>
            <input
              type="search"
              id="default-search"
              name="query"
              className="block w-full px-4 py-3 ps-16  text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search Waanverse"
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default IntroSearch;
