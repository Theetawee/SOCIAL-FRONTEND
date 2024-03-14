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
  const { searchWaanverse } = Endpoints();

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");



  const [display, setDisplay] = useState("posts");

  const { isLoading, data, isError } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchWaanverse(query!),
  });

  let content;

  if (query?.replace(" ", "") === "" || query === null) {
    content = (
      <div className="py-8">
        <IntroSearch />
        <div className="py-32 text-center">
          <h1>Search on Waanverse</h1>
        </div>
        </div>
    )
  } else {


    if (isLoading) {
      content = (
        <section className="py-32 px-4">
          <div>
            <Loader />
            <p className="text-center text-lg mt-3">
              Searching Waanverse for "{query}"
            </p>
          </div>
        </section>
      );
    } else if (isError) {
      content = (
        <section className="py-32 px-4">
          <div>
            <p className="text-center text-xl text-red-400 mb-4">
              Something went wrong. Please try again!
            </p>
          </div>
          <IntroSearch />
        </section>
      );
    } else {
      content = (
        <>
          <div className="py-8">
            <IntroSearch />
          </div>
          <div className="max-w-xl border border-gray-200 dark:border-gray-800 rounded shadow mx-auto">
            <div className="flex text-lg px-4 items-center py-4 justify-between max-w-lg mx-auto gap-10">
              <div>
                <button
                  className={`text-center flex items-center justify-center mr-2 ${display === "posts" ? "text-primary-500 font-medium" : ""
                    }`}
                  onClick={() => setDisplay("posts")}
                >
                  Posts{" "}
                  <span
                    className={` text-sm h-4 w-4  flex items-center justify-center rounded-full bg-primary-200 ml-2 dark:bg-primary-700 ${display === "posts"
                      ? "text-gray-600 dark:text-white"
                      : "dark:text-gray-300 text-gray-500"
                      }`}
                  >
                    {data?.posts.length}
                  </span>
                </button>
              </div>
              <div>
                <button
                  className={`text-center flex items-center justify-center mr-2 ${display === "accounts" ? "text-primary-500 font-medium" : ""
                    }`}
                  onClick={() => setDisplay("accounts")}
                >
                  Accounts{" "}
                  <span
                    className={` text-sm h-4 w-4  flex items-center justify-center rounded-full bg-primary-200 ml-2 dark:bg-primary-700 ${display === "accounts"
                      ? "text-gray-600 dark:text-white"
                      : "dark:text-gray-300 text-gray-500"
                      }`}
                  >
                    {" "}
                    {data?.accounts.length}{" "}
                  </span>
                </button>
              </div>
            </div>
            <hr className="h-px border-t border-gray-200 dark:border-gray-800" />
            <div>
              {display === "accounts" ? (
                <AccountResults data={data!.accounts} />
              ) : (
                <PostResults data={data!.posts} />
              )}
            </div>
          </div>
        </>
      );
    }
  }

    return (
      <Seo
        title="Search - Waanverse"
        description="Search anything within Waanverse without any borders."
      >
        <section className="p-4 min-h-screen">{content}</section>
      </Seo>
    );
  
};

export default SearchPage;
