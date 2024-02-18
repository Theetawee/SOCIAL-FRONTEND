import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const NotFound = ({ type }: { type: "post" | "profile" }) => {
    const messages = {
        profile: {
            title: "Hmm, Profile couldn't be found.",
            description:
                "We couldn't find the profile you were looking for. This may be due to a misspelled username or the profile may have been deleted or made private. You can try searching for the profile again, or explore other profiles you might be interested in.",
            callToAction: "Go Back",
            linkTo: "/",
        },
        post: {
            title: "Uh oh, that post seems to be missing!",
            description:
                "The post you're looking for might have been deleted, or there may have been a temporary issue. You can try searching for the post again, or browse similar posts that might catch your eye.",
            callToAction: "Browse Posts",
            linkTo: "/posts", // Replace with appropriate redirect link
        },
    };

    const { title, description, callToAction, linkTo } = messages[type];

    return (
        <section className="flex items-center min-h-screen justify-center">
            <div className="w-full max-w-2xl px-4 py-16 mx-auto ">
                <h2 className="text-4xl dark:text-white font-medium mb-8 text-gray-800">
                    {title}
                </h2>
                <p className="dark:text-gray-300 text-gray-600 mb-8">{description}</p>
                <div>
                <Link
                    to={linkTo}
                    className="border border-gray-100 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 w-52 dark:border-gray-800 items-center justify-center px-6 py-3  flex"
                >
                    <IoMdArrowRoundBack className="w-4 h-4 mr-2"/>
                    {callToAction}

                    </Link>
                    </div>
            </div>
        </section>
    );
};

export default NotFound;
