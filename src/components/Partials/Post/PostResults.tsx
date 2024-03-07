import { PostType } from "../../../hooks/types"
import Post from "./Post";

const PostResults = ({ data }: { data: PostType[] }) => {
    console.log(data);
  return (
    <div className="grid max-w-2xl mx-auto grid-cols-1 gap-3">
      {data.length > 0 ? (
        <>
          {data.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </>
      ) : (
        <><p className="text-center text-lg">No Posts found.</p></>
      )}
    </div>
  );
}

export default PostResults