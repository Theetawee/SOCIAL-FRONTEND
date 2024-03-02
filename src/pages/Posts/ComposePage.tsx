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

const ComposePage = () => {
    const [taged_accounts, setTaged_accounts] = useState<TagedAccount[]>([]);

    useTopbar("Compose", true);
    const user_id = 1;
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
                        className="block w-full text-left border-b border-gray-100 dark:border-gray-700 rounded-xl p-4"
                    >
                        <p>@{account.username}</p>
                    </button>
                ))}
            </div>
        );
    }

    return (
        <Seo title={"Compose"} description={"Compose new post"}>
            <section className="mb-8">
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
                                rows={8}
                                defaultValue={""}
                                style={{ whiteSpace: "pre-line" }}
                                name="content"
                                className="block w-full  px-2 py-4 resize-none focus:dark:border-gray-800 focus:border-gray-100 text-lg text-gray-800 bg-white border-0 dark:bg-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="What's on your mind?"
                                required
                            ></textarea>
                            <input
                                type="hidden"
                                name="taged"
                                value={JSON.stringify(taged_accounts)}
                            />
                            {files !== undefined && files && (
                                <span className="flex flex-wrap mb-4">
                                    {files.map((file) => (
                                        <div className="h-full" key={file}>
                                            <div className="overflow-hidden">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() =>
                                                            cancelPreview(file)
                                                        }
                                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                                    >
                                                        <MdClose className="w-6 h-6 dark:text-gray-200" />
                                                    </button>
                                                </div>
                                                <div className="w-52 p-2 mx-auto h-52 overflow-hidden flex items-center justify-center">
                                                    <img
                                                        src={file}
                                                        alt="Preview"
                                                        loading="lazy"
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </span>
                            )}
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

                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-primary-600 rounded py-1.5 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-primary-800 px-5 text-white hover:bg-primary-500"
                            >
                                {isPending ? <Loader /> : "Post"}
                            </button>
                        </div>
                    </div>
                    <div className="px-4 flex items-center gap-2 flex-wrap">
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
                        <div className="  relative flex items-center justify-center gap-4">
                            <input
                                type="text"
                                id="tagged_accounts"
                                onChange={handleGetSuggestion}
                                value={suggest}
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="@Tag account"
                            />
                            {suggest && (
                                <div className="max-w-sm top-16 rounded-md border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800  w-full absolute">
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
