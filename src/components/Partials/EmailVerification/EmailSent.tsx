import { Link } from "react-router-dom";

const EmailSent = () => {
    return (
        <div className="p-2">
            <p className="  mb-2 text-gray-700">
                We have sent an email to your email address. Please check your
                email and click on the link to activate your WaanVerse account.{" "}
            </p>
            <p className="  mb-2 text-gray-700">
                If you did not receive an email, please check your spam folder
                or{" "}
                <Link
                    to="/verify-email?redirect_login=true"
                    className="text-primary-500"
                >
                    request a new one
                </Link>
            </p>
            <p className="  text-gray-700">
                If you have any questions, please contact us at{" "}
                <a
                    className="text-primary-500"
                    href="mailto:support@waanverse.com"
                >
                    support@waanverse.com
                </a>
            </p>
        </div>
    );
};

export default EmailSent;
