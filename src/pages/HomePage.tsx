import { useEffect } from "react";
import useSidebar from "../hooks/useSidebar";
import FriendRequest from "../components/Home/HomeSidebar";
import PopularHashtags from "../components/Partials/Sidebars/PopularHashtags";
import Posts from "../components/Home/Posts";

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
      <div className="w-full">
        <div className="py-4 max-w-lg mx-auto">
          <h1 className="text-3xl">Community Posts</h1>
        </div>
        <div>
          <Posts />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
