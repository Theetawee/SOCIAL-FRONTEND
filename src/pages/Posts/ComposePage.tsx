import { FaRegImage } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Seo from "../../components/utils/Seo";
import useCompose from "../../hooks/Posts/useCompose";
import useTopbar from "../../hooks/useTopbar";
import { useState } from "react";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/Auth/useAuth";
import { IoMdAdd } from "react-icons/io";
import TagPeople from "../../components/Post/TagPeople";

const ComposePage = () => {
  const { user } = useAuth();

  const [is_thread, setIsThread] = useState("false");

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
      setIsThread("false");
    }
  };

  return (
    <Seo title={"Compose"} description={"Compose new post"}>
      <section className="pb-10 px-3 pt-6">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="w-full"
          encType="multipart/form-data">
          <div className="w-full mb-4 max-w-xl mx-auto ">
            <div>
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
                className="block rounded-t-2xl w-full  px-2 py-4 resize-none focus:dark:border-gray-800 focus:border-gray-100 text-lg bg-transparent text-gray-800 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="What's on your mind?"
                required></textarea>
              <input type="hidden" value={is_thread} name="thread" />
              {files !== undefined && files && (
                <span className="flex flex-wrap">
                  {files.map((file) => (
                    <div className="h-full" key={file}>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-3">
                          <button
                            disabled={isPending}
                            onClick={() => cancelPreview(file)}
                            className="p-1 ml-auto text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
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
              <div className="flex items-center justify-center">
                <div className={`w-full bg-gray-200  h-1 dark:bg-gray-800`}>
                  <div className="hidden dark:bg-yellow-500 bg-yellow-600 h-0 "></div>
                  <div
                    className={`bg-${color}-600  h-1 rounded  dark:bg-${color}-500`}
                    style={{ width: `${content_number}%` }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-4">
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
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <FaRegImage className="w-4 h-4 dark:text-gray-200" />
                  </label>
                </div>
              </div>
              {content_number <= 0 && (
                <button
                  type="submit"
                  onClick={() => {
                    handleThread(true);
                  }}
                  disabled={isPending}
                  className="bg-gray-900 flex items-center justify-center gap-1 rounded py-1.5 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-primary-800 px-5 text-white hover:bg-gray-900/80">
                  <IoMdAdd /> Add thread
                </button>
              )}
              <Button
                type="submit"
                onClick={() => {
                  handleThread(false);
                }}
                disabled={isPending}
                className="bg-primary-600  rounded py-1.5 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-primary-800 px-5 text-white hover:bg-primary-500"
                label="Post"
              />
            </div>
          </div>
        </form>
        <TagPeople/>
      </section>
    </Seo>
  );
};

export default ComposePage;
