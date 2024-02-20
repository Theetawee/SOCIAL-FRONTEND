import { FaImage } from "react-icons/fa";

const PostLoader = ({ image = false }: { image?: boolean }) => {
    return (
        <>
            <section className="px-4 py-2">
                <div role="status" className="w-full animate-pulse">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0 me-3"></div>
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
                    <div className="h-2 bg-gray-200 w-32 rounded-full dark:bg-gray-700 mb-3"></div>
                    {image && (
                        <div className="flex items-center justify-center mt-2.5 h-72 bg-gray-300 rounded-xl dark:bg-gray-700">
                            <FaImage className="w-8 h-8 text-gray-200 dark:text-gray-500" />
                        </div>
                    )}
                    <div className="flex items-center mt-3 w-full max-w-[360px]">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                        <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </section>
            <hr className="border-gray-200 dark:border-gray-700 my-2 border-t h-px" />
        </>
    );
};

export default PostLoader;
