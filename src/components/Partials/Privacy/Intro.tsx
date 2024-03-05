import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <section className="py-8">
            <div className="text-left mb-8">
                <p className="text-lg">
                    This privacy notice for Waanverse Corp. describes how and
                    why we might collect, store, use, and/or share (process)
                    your information when you use our services and products,
                    such as when you:
                </p>
                <ul className="list-disc pl-4">
                    <li>
                        Visit any of our products and services, including
                        websites, and mobile apps that links to this privacy
                        notice
                    </li>
                    <li>
                        Engage with us in other related ways, including any
                        sales, marketing, or events
                    </li>
                </ul>
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold mb-4">
                    Summary of Key Points
                </h2>
                <p className="mb-4">
                    This summary provides key points from our privacy notice,
                    but you can find out more details about any of these topics
                    by clicking the link following each key point or by using
                    our table of contents below to find the section you are
                    looking for.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    What personal information do we process?
                </h3>
                <p className="mb-4">
                    When you visit, use, or navigate our Services, we may
                    process personal information depending on how you interact
                    with us and the Services, the choices you make, and the
                    products and features you use.{" "}
                    <a className="text-primary-600" href="#personal-info">
                        Learn more about personal information you disclose to
                        us.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    Do we process any sensitive personal information?
                </h3>
                <p className="mb-4">
                    We may process sensitive personal information when necessary
                    with your consent or as otherwise permitted by applicable
                    law.{" "}
                    <a className="text-primary-600" href="#sensitive-info">
                        Learn more about sensitive information we process.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    Do we receive any information from third parties?
                </h3>
                <p className="mb-4">
                    We do not receive any information from third parties.
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    How do we process your information?
                </h3>
                <p className="mb-4">
                    We process your information to provide, improve, and
                    administer our Services, communicate with you, for security
                    and fraud prevention, and to comply with law. We may also
                    process your information for other purposes with your
                    consent.{" "}
                    <a className="text-primary-600" href="#process-info">
                        Learn more about how we process your information.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    In what situations and with which parties do we share
                    personal information?
                </h3>
                <p className="mb-4">
                    We may share information in specific situations and with
                    specific third parties.{" "}
                    <a href="#share-info" className="text-primary-600">
                        Learn more about when and with whom we share your
                        personal information.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    How do we keep your information safe?
                </h3>
                <p className="mb-4">
                    We have organisational and technical processes and
                    procedures in place to protect your personal information.
                    However, no electronic transmission over the internet or
                    information storage technology can be guaranteed to be 100%
                    secure, so we cannot promise or guarantee that hackers,
                    cybercriminals, or other unauthorised third parties will not
                    be able to defeat our security and improperly collect,
                    access, steal, or modify your information.{" "}
                    <a href="#safe-info" className="text-primary-600">
                        Learn more about how we keep your information safe.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    What are your rights?
                </h3>
                <p className="mb-4">
                    Depending on where you are located geographically, the
                    applicable privacy law may mean you have certain rights
                    regarding your personal information.{" "}
                    <a href="#privacy-rights" className="text-primary-600">
                        Learn more about your privacy rights.
                    </a>
                </p>
                <h3 className="text-lg font-semibold mb-2">
                    How do you exercise your rights?
                </h3>
                <p className="mb-4">
                    The easiest way to exercise your rights is by visiting
                    <Link className="text-primary-600" to="/account/info">
                        Your information page
                    </Link>
                    , or by contacting us. We will consider and act upon any
                    request in accordance with applicable data protection laws.
                </p>
                <p className="mb-4">
                    Want to learn more about what we do with any information we
                    collect? Review the privacy notice in full.
                </p>
            </div>
        </section>
    );
};

export default Intro;
