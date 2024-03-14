import { Link } from "react-router-dom"
import Switch from "../common/Switch";

const Footer = () => {
    return (
      <div className="px-3 pt-3 pb-8">
        <footer className="flex bg-gray-50 justify-center text-sm border border-gray-300 dark:border-gray-800 rounded-full px-6  dark:bg-gray-950 w-full  items-center gap-x-8 flex-wrap sm:justify-between max-w-screen-lg  gap-y-2 mx-auto p-4">
          <span>
            <Link to={"/"} className="hover:underline hover:text-primary-600">
              Home
            </Link>
          </span>
          <span>
            <Link to={"/accounts/login"} className="hover:underline hover:text-primary-600">
              Login
            </Link>
          </span>
          <span>
            <Link to={"/accounts/signup"} className="hover:underline hover:text-primary-600">
              Create account
            </Link>
          </span>
          <span>
            <Link to={"/legal/privacy"} className="hover:underline hover:text-primary-600">
              Privacy policy
            </Link>
          </span>
          <span>
            <Switch/>
          </span>
        </footer>
      </div>
    );
}

export default Footer
