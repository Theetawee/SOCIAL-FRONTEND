import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import utils from "../../hooks/utils";
import Name from "../Partials/Account/Name";
import Image from "../common/Image";
import useAxios from "../../hooks/useAxios";
import { SuggestedAccount } from "../../hooks/types";
import Loader from "../common/Loader";

const TagPeople = ({handleMentionedAccounts}: {handleMentionedAccounts: (accounts: string[]) => void}) => {
  const api = useAxios();

  const [mentionedAccounts, setMentionedAccounts] = useState<string[]>([]);


  const [isLoading, setIsLoading] = useState(false);

  const { DefaultAvater } = utils();

  const [value, setValue] = useState("");

  const [error, setError] = useState(false);

  const [suggestions, setSuggestions] = useState<SuggestedAccount[]>([]);

  const debouncedValue = useDebounce(value, 1000);

    const addToMentionedAccounts = (username: string) => {
        setMentionedAccounts((prev) => [...prev, username]);

        setValue("");
    }


useEffect(() => {
    handleMentionedAccounts(mentionedAccounts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [mentionedAccounts]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const input_value = e.target.value;

    setValue(input_value);
  };

  useEffect(() => {
    const getSuggestions = async ({
      query,
    }: {
      query: string;
    }): Promise<SuggestedAccount[]> => {
      setError(false);
      try {
        const response = await api.get(`/accounts/suggestions/?query=${query}`);

        return response.data;
      } catch (err) {
        setError(true);
        return [];
      } finally {
        setIsLoading(false);
      }
    };

    const setData = async () => {
      const suggestions = await getSuggestions({ query: debouncedValue });

      setSuggestions(suggestions);
    };

    if (debouncedValue) {
      setData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <>
      <div className="max-w-xl mx-auto">
        <p className="text-gray-700 mb-4 dark:text-gray-200 text-xl">
          Tag People
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              value={value}
              onChange={handleChange}
              name="tag_people"
              type="text"
              id="tag_people"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="@username"
              required
            />
          </div>
          <div>
            <div className="p-4 border border-gray-50 dark:border-gray-800 rounded-xl">
              <p className="text-lg mb-3">Suggestions</p>
              {value === "" ? (
                <>
                  <p className="text-gray-500 text-xs">
                    No suggestions available
                  </p>
                </>
              ) : (
                <>
                  {isLoading && !error ? (
                    <>
                      <Loader />
                    </>
                  ) : (
                    <>
                      {error ? (
                        <>
                          <p className="text-red-500 text-xs">
                            Unable to fetch data!
                          </p>
                        </>
                      ) : (
                        <>
                          {suggestions.length === 0 ? (
                            <p className="text-gray-500 text-xs">
                              No suggestions available
                            </p>
                          ) : (
                            <>
                              <ul>
                                {suggestions.map((suggestion) => (
                                  <li key={suggestion.id}>
                                    <button className="mb-3 w-full" onClick={() => addToMentionedAccounts(suggestion.username)}>
                                      <div className="flex items-start justify-start flex-col">
                                        <div className="flex items-start justify-between gap-x-2">
                                          <Image
                                            src={
                                              suggestion.image || DefaultAvater
                                            }
                                            hash={suggestion.profile_image_hash}
                                            alt={suggestion.name}
                                            className="w-8 h-8 rounded-full"
                                          />
                                          <div className="flex flex-col items-start justify-start">
                                            <Name
                                              verified={suggestion.verified}
                                              name={suggestion.name}
                                            />
                                            <p>@{suggestion.username}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagPeople;
