import { Link } from "react-router-dom";

const EmailSent = () => {
    return (
        <div className="p-2 dark:text-gray-100">
            <p className="text-gray-700 mb-3 dark:text-white">
                We've sent an email to verify your account. Please check your
                inbox and click the link to activate your Waanverse account.{" "}
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-100">
                If you haven't received the email, please check your spam folder
                or{" "}
                <Link
                    to="/accounts/verify-email?redirect_login=true"
                    className="text-primary-500"
                >
                    request a new one
                </Link>
            </p>
            <p className="text-gray-700 dark:text-gray-100">
                For further assistance, contact us at{" "}
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
