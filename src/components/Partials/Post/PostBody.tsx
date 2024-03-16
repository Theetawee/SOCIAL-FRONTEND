import Image from "../../common/Image";
import { ImageDataType } from "../../../hooks/types";
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
    files: ImageDataType[];
    content: string;
    id: number;
    open_image?: boolean;
    cut?: boolean;
}

const PostBody = ({ files, cut = true, content,open_image=false,id }: Props): JSX.Element => {
    const [images, setImages] = useState<string[]>();
    const [toggler, setToggler] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if (files) {
            const images_strings: string[] = [];
            files.forEach((file) => {
                images_strings.push(file.content_image);
            })
            setImages(images_strings)
        }
    }, [files])
    const handleOnclick = () => {
        if(open_image){
            setToggler(!toggler)
        } else {
            navigate(`/posts/${id}`)
        }
    }
    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={images}
            />
            <div>
                {cut ? (
                    <div className="mb-2">
                        <p className="whitespace-pre-wrap break-words line-clamp-3">
                            {content}
                        </p>
                    </div>
                ) : (
                    <div className="mb-2 break-words whitespace-pre-wrap">{content}</div>
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
                                <button
                                    onClick={handleOnclick}
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
                                </button>
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
