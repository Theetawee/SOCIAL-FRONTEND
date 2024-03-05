import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <div>
        <div className="h-px w-[90%] border-0 mx-auto"></div>
        <footer className="flex bg-gray-50 text-sm dark:bg-gray-950 w-full  items-center gap-8 flex-wrap justify-between max-w-screen-lg   mx-auto p-4">
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
          <span>
            <Link to={"/legal/privacy"} className="hover:underline">
              Privacy policy
            </Link>
          </span>
        </footer>
      </div>
    );
}

export default Footer
