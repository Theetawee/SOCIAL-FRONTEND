import { Link, useSearchParams } from "react-router-dom";
import ResendEmail from "../../components/Partials/EmailVerification/ResendEmail";
import EmailSent from "../../components/Partials/EmailVerification/EmailSent";

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
        <section className="h-screen px-4 flex items-center justify-center">
            <div className="max-w-lg w-full min-h-52 mx-auto bg-white border-gray-100 shadow p-4 rounded">
                <div className="w-full">{content}</div>
            </div>
        </section>
    );
};

export default VerifyEmailPage;
