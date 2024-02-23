import { FaRegImage } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Loader from "../../components/common/Loader";
import Seo from "../../components/utils/Seo";
import useCompose from "../../hooks/Posts/useCompose";
import Select from "../../components/common/Select";

// import PostPrivacy from "../../components/Posts/PostPrivacy";
// import TagPerson from "../../components/Posts/TagPerson";

const ComposePage = () => {
    const user_id = 1;
    const {
        isPending,
        cancelPreview,
        inputRef,
        handleSubmit,
        handleChange,
        files,
    } = useCompose(user_id!);

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
                                style={{ whiteSpace: "pre-line" }}
                                name="content"
                                className="block w-full  px-2 py-4 resize-none focus:dark:border-gray-800 focus:border-gray-100 text-lg text-gray-800 bg-white border-0 dark:bg-gray-800/10 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="What's on your mind?"
                                defaultValue={""}
                                required
                            ></textarea>
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

                    <div className="p-4">
                        <div className="mb-6">{/* <TagPerson /> */}</div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p>Who can see your post</p>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <Select
                                    className="px-4 py-2"
                                    disabled={isPending}
                                    name="open_to"
                                    label="Who can see your post"
                                    required
                                    defaultValue="E"
                                    options={[
                                        { label: "Everyone", value: "E" },
                                        { label: "Friends", value: "AF" },
                                        { label: "Followers", value: "F" },
                                        { label: "Only me", value: "O" },
                                    ]}
                                />
                            </div>

                        </div>
                    </div>
                </form>
            </section>
        </Seo>
    );
};

export default ComposePage;
