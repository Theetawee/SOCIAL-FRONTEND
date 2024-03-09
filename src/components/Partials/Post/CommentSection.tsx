import { useState } from "react";

const CommentSection = () => {

    const [comment, setComment] = useState("");



  return (
    <div>
      <textarea
        id="message"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-white  border-b resize-none border-0 border-gray-300 focus:ring-0 focus:border-gray-300 dark:focus:border-gray-800  dark:bg-gray-950 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white "
        placeholder="Add a comment."
          ></textarea>
          {comment && (
              <div className="p-4 ">
                  <div className="flex items-center justify-between">
                      <button onClick={() => setComment("")}>Cancel</button>
                      <button className="bg-primary-600 py-2 rounded hover:bg-primary-600/90 px-5 text-white ">Save</button>
                  </div>
              </div>)}
    </div>
  );
}

export default CommentSection