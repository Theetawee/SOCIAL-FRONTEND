import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
const AppBar = () => {
    return (
        <header className="p-4 bg-white dark:bg-gray-900">
            <nav className="flex max-w-2xl mx-auto items-center justify-between">
                <div>
                    <Link to={"/"} className="flex items-center">
                        <Logo/>
                        <span className="ml-1 text-lg">Waanverse Corp.</span>
                    </Link>
                </div>
                <div>
                    <p>Privacy Policy</p>
                </div>
            </nav>
        </header>
    );
};

export default AppBar;
