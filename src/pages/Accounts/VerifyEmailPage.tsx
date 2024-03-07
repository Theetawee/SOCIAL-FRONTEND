import { Link, useSearchParams } from "react-router-dom";
import ResendEmail from "../../components/Partials/EmailVerification/ResendEmail";
import EmailSent from "../../components/Partials/EmailVerification/EmailSent";
import Seo from "../../components/utils/Seo";

const VerifyEmailPage = () => {
    const [searchParams] = useSearchParams();

    const redirect_login = searchParams.get("redirect_login");
    let content;
    if (redirect_login === "true") {
        content = (
            <>
                <ResendEmail />
            </>
        );
    } else if (redirect_login === "false") {
        content = (
            <>
                <EmailSent />
            </>
        );
    } else {
        content = (
            <div className="text-center">
                <p>Go back home</p>

                <Link to="/" className="text-primary-600 underline">
                    Home
                </Link>
            </div>
        );
    }

    return (
        <Seo
            title="Activate Your WaanVerse Account - Unlock Exciting Opportunities"
            description="Activate your account to access exclusive features, connect with friends, and explore a world of possibilities. Simply verify your email address to begin your journey. Let's get started!"
        >
            <section className="h-screen px-4 flex items-center justify-center">
                <div className="max-w-lg dark:bg-gray-900 bg-gray-50 w-full min-h-52 mx-auto py-10  border-gray-100 shadow px-4 sm:px-6 rounded">
                    <div className="w-full">{content}</div>
                </div>
            </section>
        </Seo>
    );
};

export default VerifyEmailPage;
