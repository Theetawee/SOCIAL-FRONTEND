import { PostType } from "../../../hooks/types"
import Post from "../../Post/Post";

const PostResults = ({ data }: { data: PostType[] }) => {
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
        <><p className="text-center text-lg py-4">No Posts found.</p></>
      )}
    </div>
  );
}

export default PostResults