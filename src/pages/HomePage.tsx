import Posts from "../components/Home/Posts";


const HomePage = () => {
  
  return (
    <section className="px-4">
      <div className="w-full">
        <div className="py-4 max-w-screen-md mx-auto">
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
