import { useParams } from "react-router-dom"
import Endpoints from "../../hooks/Posts/Endpoints";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/common/Loader";
import CommonError from "../../components/common/CommonError";

const PostDetailPage = () => {

    const { id } = useParams();

    const postId = parseInt(id!);

    const { getPostById } = Endpoints();

    const { data,isPending,isError} = useQuery({
        queryKey: ['posts', postId],
        queryFn: () => getPostById(postId)
    })

    if (isPending) {
        return (
            <Loader/>
        )
    } else if (isError) {
        return (
            <CommonError/>
        )
    } else {
        return (
            <p>{data.content}</p>
        )
    }

  
}

export default PostDetailPage
