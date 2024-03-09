import { useEffect } from "react";
import useSidebar from "../hooks/useSidebar";
import FriendRequest from "../components/Partials/Sidebars/FriendRequest";
import PopularHashtags from "../components/Partials/Sidebars/PopularHashtags";
import Posts from "../components/Partials/Home/Posts";

const HomePage = () => {
    const { setComponent } = useSidebar();

    useEffect(() => {
        setComponent(
            <section className="grid grid-cols-1 gap-4">
                <FriendRequest />
                <PopularHashtags />
            </section>
        );
        return () => {
            setComponent(null);
        };
    }, [setComponent]);

    return (
        <section className="relative">
            <div>
                <Posts />
            </div>
        </section>
    );
};

export default HomePage;
