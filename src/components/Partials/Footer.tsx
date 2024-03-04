import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="flex items-center gap-3 flex-wrap justify-center max-w-lg mx-auto py-4">
            <span>
                <Link to={"/"} className="hover:underline">
                    Home
                </Link>
            </span>
            <span>
                <Link to={"/accounts/login"} className="hover:underline">
                    Login
                </Link>
            </span>
            <span>
                <Link to={"/accounts/signup"} className="hover:underline">
                    Create account
                </Link>
            </span>
        </footer>
    );
}

export default Footer
