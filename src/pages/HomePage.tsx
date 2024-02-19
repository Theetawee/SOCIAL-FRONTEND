import { useEffect, useState } from "react";
import Post from "../components/Post/Post";
import useSidebar from "../hooks/useSidebar";
import FriendRequest from "../components/Partials/Sidebars/FriendRequest";
import PopularHashtags from "../components/Partials/Sidebars/PopularHashtags";

const HomePage = () => {

    const [all, setAll] = useState(true);

    const {setComponent } = useSidebar();

    useEffect(() => {
        setComponent(<section className="grid grid-cols-1 gap-4"><FriendRequest/><PopularHashtags/></section>);
        return () => {
            setComponent(null);
        }
    },[setComponent])


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
