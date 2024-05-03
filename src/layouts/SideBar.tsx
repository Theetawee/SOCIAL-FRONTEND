import VerifiedMsg from "../components/Account/VerifiedMsg";
import HomeSidebar from "../components/Home/HomeSidebar";
import useSidebar from "../hooks/useSidebar";

const SideBar = () => {
  const { component } = useSidebar();
  return (
    <aside className="h-full py-8 overflow-y-auto">
      <div>{component}</div>

      <VerifiedMsg />
      <HomeSidebar />
    </aside>
  );
};

export default SideBar;
