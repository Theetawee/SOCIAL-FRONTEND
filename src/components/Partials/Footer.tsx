import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <div className="bg-white dark:bg-gray-900">
        <div className="h-px w-[90%] bg-gray-200 border-0 mx-auto dark:bg-gray-700"></div> 
        <footer className="flex bg-white dark:bg-gray-900 w-full  items-center gap-8 flex-wrap justify-center  mx-auto py-4">
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
      </div>
    );
}

export default Footer
