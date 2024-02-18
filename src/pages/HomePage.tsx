import { useState } from "react";
import Post from "../components/Post/Post";

const HomePage = () => {

    const [all, setAll] = useState(true);





    return (
        <section>
            <div className="grid px-4 py-2  text-center grid-cols-2">
                <button className={`${all?"text-primary-500 font-medium":""}`} onClick={() => setAll(true)}>All Posts</button>
                <button className={`${!all?"text-primary-500 font-medium":""}`} onClick={() => setAll(false)}>My Friends</button>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </section>
    );
};

export default HomePage;