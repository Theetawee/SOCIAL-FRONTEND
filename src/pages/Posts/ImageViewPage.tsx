import { useQuery } from "@tanstack/react-query";
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Endpoints from "../../hooks/Posts/Endpoints";
import Loader from "../../components/common/Loader";

const ImageViewPage = () => {
    const { id } = useParams();
    const postId = parseInt(id!);
    const { getPostImages } = Endpoints();
    const [toggler, setToggler] = useState(false);
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["images", postId],
        queryFn: () => getPostImages(postId),
    });

    useEffect(() => {
        setToggler(true);
    }, []);

    const images_data:string[] = [];

    if (isLoading) {
        return <Loader />;
    } else if (isError) {
        return <p>Error</p>;
    } else {
        if (data) {
            data.forEach((postimage) => {
                images_data.push(postimage.content_image);
            });
        }

        return (
            <div>
                <FsLightbox
                    toggler={toggler}
                    onClose={() => navigate(-1)}
                    sources={images_data}
                />
            </div>
        );
    }
};

export default ImageViewPage;
