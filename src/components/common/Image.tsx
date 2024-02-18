import { useState } from "react";
import { Blurhash } from "react-blurhash";

interface props {
    src: string;
    alt: string;
    className?: string;
    hash?: string;
}

const Image = ({
    src,
    alt,
    className,
    hash = "LTL55tj[~qof?bfQIUj[j[fQM{ay",
}: props) => {

    const [imgLoaded, setImgLoaded] = useState(false);

    const onImgLoad = () => {
        setImgLoaded(true);
    }
    const handleError = () => {
        setImgLoaded(false);
    }



    return (
        <div className={`${className} overflow-hidden relative`}>
            <Blurhash
                hash={hash}
                resolutionX={32}
                width={"100%"}
                height={"100%"}
                resolutionY={32}
                punch={1}
            />
            <img
                src={src}
                alt={alt}
                referrerPolicy="no-referrer"
                onLoad={onImgLoad}
                onError={handleError}
                className={`w-full h-full  absolute top-0 left-0 z-10 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default Image;
