import { FaRegImage } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Loader from "../../components/common/Loader";
import Seo from "../../components/utils/Seo";
import useCompose from "../../hooks/Posts/useCompose";
import useTopbar from "../../hooks/useTopbar";
import useSuggestions from "../../hooks/Posts/useSuggestions";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import { TagedAccount } from "../../hooks/types";
import Image from "../../components/common/Image";
import DefaultAvater from "../../assets/default.webp";
import VerifiedSvg from "../../components/Partials/Account/VerifiedSvg";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/Auth/useAuth";
import { IoMdAdd } from "react-icons/io";



const ComposePage = () => {
  const [taged_accounts, setTaged_accounts] = useState<TagedAccount[]>([]);
  const { user } = useAuth();

  const [is_thread,setIsThread] = useState("false");

  useTopbar("Compose", true);
  const user_id = user?.id;
  const {
    isPending,
    cancelPreview,
    inputRef,
    handleSubmit,
    handleChange,
    files,
  } = useCompose(user_id!);

  const {
    handleGetSuggestion,
    suggest,
    data,
    isPending: dataPending,
    isError,
    setSuggest,
  } = useSuggestions();

  const addToList = (username: string, id: number) => {
    // Check if the account already exists in the taged_accounts array
    const accountExists = taged_accounts.some(
      (account) => account.id === id && account.username === username
    );
    if (accountExists) {
      setSuggest("");
      return;
    }

    // If the account does not exist, add it to the taged_accounts array
    const newAccount = { username, id };
    const newAccountsList = [...taged_accounts, newAccount];
    setTaged_accounts(newAccountsList);
    setSuggest("");
  };

  const [post_content, setPostContent] = useState("");
  const [content_number, setContent_number] = useState(100);
  const [color, setColor] = useState("primary");

  const handlePostContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    if (inputValue.length > 0) {
      setIsThread("false");
    }
    if (inputValue.length <= 200) {
      setPostContent(inputValue);
      const percentageDiff = ((200 - inputValue.length) / 200) * 100;
      if (percentageDiff >= 51) {
        setColor("primary");
      } else if (percentageDiff <= 50 && percentageDiff > 25) {
        setColor("yellow");
      } else {
        setColor("red");
      }
      setContent_number(percentageDiff);
    }
  };

  const handleThread = (set: boolean) => {
    if (set) {
      setIsThread("true");
    } else {
      setIsThread("false")
    }
  }
  
  const removeFromList = (id: number) => {
    const new_accounts_list = taged_accounts.filter(
      (account) => account.id !== id
    );
    setTaged_accounts(new_accounts_list);
  };

  let content;

  if (dataPending) {
    content = <Loader />;
  } else if (isError) {
    content = <p>Error</p>;
  } else if (data?.length === 0) {
    content = <p className="italic p-4 text-sm">No account found!</p>;
  } else {
    content = (
      <div>
        {data?.map((account) => (
          <button
            onClick={() => addToList(account.username, account.id)}
            type="button"
            key={account.id}
            className="flex w-full items-center  text-left border-b border-gray-100 dark:border-gray-700 rounded-xl py-4 px-2"
          >
            <Image
              src={account.image || DefaultAvater}
              className="w-9 mr-2 h-9 rounded-full"
              hash={account.profile_image_hash}
              alt={account.name}
            />
            <p>@{account.username}</p>
            {account.verified && <VerifiedSvg />}
          </button>
        ))}
      </div>
    );
  }

  return (
    <Seo title={"Compose"} description={"Compose new post"}>
      <section className="pb-10">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="w-full"
          encType="multipart/form-data"
        >
          <div className="w-full mb-4 rounded bg-white dark:bg-gray-900">
            <div className="border-b border-gray-100 dark:border-gray-800 ">
              <label htmlFor="editor" className="sr-only">
                Publish post
              </label>
              <textarea
                id="editor"
                disabled={isPending}
                onChange={handlePostContentChange}
                rows={5}
                value={post_content}
                style={{ whiteSpace: "pre-line" }}
                name="content"
                className="block w-full  px-2 py-4 resize-none focus:dark:border-gray-800 focus:border-gray-100 text-lg text-gray-800 bg-white border-0 dark:bg-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="What's on your mind?"
                required
              ></textarea>
              <input type="hidden" value={is_thread} name="thread"/>
              <input
                type="hidden"
                name="taged"
                value={JSON.stringify(taged_accounts)}
              />
              {files !== undefined && files && (
                <span className="flex flex-wrap">
                  {files.map((file) => (
                    <div className="h-full" key={file}>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-3">
                          <button
                            disabled={isPending}
                            onClick={() => cancelPreview(file)}
                            className="p-1 ml-auto text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <MdClose className="w-6 h-6 dark:text-gray-200" />
                          </button>
                        </div>
                        <div className="w-52 rounded-xl px-2 pb-2 mx-auto h-52 overflow-hidden  flex items-center justify-center">
                          <img
                            src={file}
                            alt="Preview"
                            loading="lazy"
                            className="object-contain rounded-xl w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </span>
              )}
              <div className="flex items-center gap-2 px-4 pb-4">
                {taged_accounts?.map((account) => (
                  <div
                    className="mr-2 flex items-center gap-4 justify-between border rounded px-4 py-2"
                    key={account.id}
                  >
                    @{account.username}
                    <button
                      onClick={() => removeFromList(account.id)}
                      type="button"
                    >
                      <BsX className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center border-b dark:border-gray-800">
                <div className={`w-full bg-gray-200  h-1 dark:bg-gray-800`}>
                  <div className="hidden dark:bg-yellow-500 bg-yellow-600 h-0 "></div>
                  <div
                    className={`bg-${color}-600  h-1 rounded  dark:bg-${color}-500`}
                    style={{ width: `${content_number}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-800">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-800">
                <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <input
                    accept=".png,.jpg,.jpeg"
                    type="file"
                    name="file"
                    id="file"
                    multiple
                    ref={inputRef}
                    disabled={isPending}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <FaRegImage className="w-4 h-4 dark:text-gray-200" />
                  </label>
                </div>
              </div>
              {content_number <= 0 && (
                <button type="submit"
                  onClick={() => { handleThread(true) }}
                  disabled={isPending}
                  className="bg-gray-900 flex items-center justify-center gap-1 rounded py-1.5 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-primary-800 px-5 text-white hover:bg-gray-900/80"
                  ><IoMdAdd/> Add thread</button>
                )}
              <Button
                type="submit"
                onClick={()=>{handleThread(false)}}
                disabled={isPending}
                className="bg-primary-600  rounded py-1.5 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-primary-800 px-5 text-white hover:bg-primary-500"
                label="Post"
              />
            </div>
          </div>
          <div className="px-4 pb-4 pt-4">
            <div className="relative flex flex-col items-center justify-between gap-2">
              <input
                type="text"
                id="tagged_accounts"
                autoComplete="off"
                spellCheck="false"
                onChange={handleGetSuggestion}
                value={suggest}
                className="bg-white border w-full border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="@Tag account"
              />
              {suggest && (
                <div className="w-full rounded-md border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800  ">
                  {content}
                </div>
              )}
            </div>
          </div>
        </form>
      </section>
    </Seo>
  );
};

export default ComposePage;
