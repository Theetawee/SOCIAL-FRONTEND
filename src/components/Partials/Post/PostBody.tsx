import Image from "../../common/Image";
import { Link } from "react-router-dom";
import { ImageDataType } from "../../../hooks/types";

interface Props {
    files: ImageDataType[];
    content: string;
    id: number;

    cut?: boolean;
}

const PostBody = ({ files, cut = true, content, id }: Props): JSX.Element => {
    return (
        <>
            <div>
                {cut ? (
                    <div className="mb-2">
                        <p className="whitespace-pre-wrap line-clamp-3">
                {content}
                        </p>
                    </div>
                ) : (
                    <div className="mb-2 whitespace-pre-wrap">{content}</div>
                )}
                {files && files.length > 0 && (
                    <span
                        className="block"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex h-72 border border-gray-100 dark:border-gray-800 w-full rounded-2xl items-center overflow-hidden flex-wrap justify-center">
                            {files.slice(0, 2).map((file, index) => (
                                <Link
                                    to={`/post/file/${id}`}
                                    className={`block h-full overflow-hidden ${
                                        index === files.length - 1 &&
                                        files.length % 2 === 1
                                            ? "w-full"
                                            : "w-1/2"
                                    }`}
                                    key={file.id}
                                >
                                    <div className="relative h-full flex items-center justify-center">
                                        {index === 1 && files.length > 2 && (
                                            <span className="absolute border-l dark:border-gray-800 border-gray-100 bg-black/50 w-full z-20 text-lg  font-bold top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white">
                                                +{files.length - 2}
                                            </span>
                                        )}

                                        <Image
                                            src={file.content_image}
                                            alt={"file"}
                                            className={`w-full flex items-center justify-center object-cover flex-grow h-full`}
                                            hash={file.image_hash}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </span>
                )}
                {/* <div className="flex items-center flex-wrap">
                    {taged.length > 0 && (
                        <>
                            {taged.map((user) => (
                                <div className="pt-0.5 pr-0.5" key={user.id}>
                                    <span className="bg-gray-100  text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                        @{user.username}
                                    </span>
                                </div>
                            ))}
                        </>
                    )}
                </div> */}
            </div>
        </>
    );
};

export default PostBody;
