import { useEffect } from "react";
import useSidebar from "../hooks/useSidebar";
import FriendRequest from "../components/Partials/Sidebars/FriendRequest";
import PopularHashtags from "../components/Partials/Sidebars/PopularHashtags";
import Posts from "../components/Posts";

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
    <section className="px-4">
      <div className="p-4">
        <h1 className="text-3xl">Community Posts</h1>
      </div>
      <div>
        <Posts />
      </div>
    </section>
  );
};

export default HomePage;
