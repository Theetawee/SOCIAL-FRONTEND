import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <section className="flex items-center justify-center h-screen dark:bg-gray-900">
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <h1 className="text-6xl font-bold text-gray-500 dark:text-gray-300">4</h1>{" "}
                    <h1 className="text-6xl font-bold animate-bounce text-gray-500 dark:text-gray-300">0</h1>
                    <h1 className="text-6xl font-bold text-gray-500 dark:text-gray-300">4</h1>
                </div>
                <p className="text-xl text-gray-600">Oops! Page not found</p>
                <p className="mt-4 text-gray-600">
                    The page you are looking for might be in another dimension.
                </p>
                <Link to="/" className="mt-8 text-primary-500 font-medium hover:underline">
                    Go back home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
