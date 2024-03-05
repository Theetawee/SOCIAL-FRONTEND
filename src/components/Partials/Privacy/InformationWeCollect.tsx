import Heading from "./Heading";

const InformationWeCollect = () => {
    return (
        <section id="information_we_collect" className="py-8">
            <div>
                <div className="py-4">
                    <Heading label="1. What Information We Collect" />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-4">
                        Personal Information You Disclose to Us
                    </h3>
                    <p className="mb-4">
                        We collect personal information that you voluntarily
                        provide to us when you register for a Waanverse account,
                        express an interest in obtaining information about us or
                        our products and Services, when you participate in
                        activities on the Services, or otherwise when you
                        contact us.
                    </p>
                    <p className="mb-4">
                        The personal information that we collect depends on the
                        context of your interactions with us and the Services,
                        the choices you make, and the products and features you
                        use. The personal information we collect may include the
                        following:
                    </p>
                    <ul className="list-disc pl-8 mb-4">
                        <li>Names</li>
                        <li>Phone numbers</li>
                        <li>Email addresses</li>
                        <li>Mailing addresses</li>
                        <li>Usernames</li>
                        <li>Passwords</li>
                        <li>Contact preferences</li>
                        <li>Contact and authentication data</li>
                        <li>Billing address</li>
                        <li>Debit/Credit card information</li>
                    </ul>
                    <p className="mb-4">
                        Sensitive Information. When necessary, with your consent
                        or as otherwise permitted by applicable law, we process
                        the following categories of sensitive information:
                    </p>
                    <ul className="list-disc pl-8 mb-4">
                        <li>
                            data about a person's sex life or sexual orientation
                        </li>
                        <li>information revealing race or ethnic origin</li>
                        <li>information revealing political opinions</li>
                        <li>
                            information revealing religious or philosophical
                            beliefs
                        </li>
                        <li>information revealing trade union membership</li>
                        <li>student data</li>
                    </ul>
                    <h4 className="mb-4 text-lg">Social Media Login Data.</h4>
                    <p className="mb-4">
                        We may provide you with the option to register with us
                        using your existing social media account details, like
                        your Google, or other social media account. If you
                        choose to register in this way, we will collect the
                        information described in the section called{" "}
                        <a className="text-primary-600" href="#social_logins">
                            {" "}
                            HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                        </a>{" "}
                        below.
                    </p>
                    <p className="mb-4">
                        All personal information that you provide to us must be
                        true, complete, and accurate, and you must notify us of
                        any changes to such personal information.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">
                        Information automatically collected
                    </h3>
                    <p className="italic mb-4">
                        In Short:Some information — such as your Internet
                        Protocol (IP) address and/or browser and device
                        characteristics — is collected automatically when you
                        visit our Services.
                    </p>
                    <p className="mb-3">
                        Waanverse automatically collect certain information when
                        you visit, use, or navigate Waanverse services and
                        products. This information does not reveal your specific
                        identity (like your name or contact information) but may
                        include device and usage information, such as your IP
                        address, browser and device characteristics, operating
                        system, language preferences, referring URLs, device
                        name, country, location, information about how and when
                        you use our Services, and other technical information.
                        This information is primarily needed to maintain the
                        security and operation of our Services, and for our
                        internal analytics and reporting purposes.
                    </p>
                    <p className="mb-3">
                        Like many businesses, we also collect information
                        through cookies and similar technologies. The
                        information we collect includes:
                    </p>
                    <ul className="list-disc pl-8 mb-3">
                        <li>
                            Log and Usage Data. Log and usage data is
                            service-related, diagnostic, usage, and performance
                            information our servers automatically collect when
                            you access or use our Services and which we record
                            in log files. Depending on how you interact with us,
                            this log data may include your IP address, device
                            information, browser type, and settings and
                            information about your activity in the Services
                            (such as the date/time stamps associated with your
                            usage, pages and files viewed, searches, and other
                            actions you take such as which features you use),
                            device event information (such as system activity,
                            error reports (sometimes called 'crash dumps'), and
                            hardware settings).
                        </li>
                        <li>
                            Device Data. We collect device data such as
                            information about your computer, phone, tablet, or
                            other device you use to access the Services.
                            Depending on the device used, this device data may
                            include information such as your IP address (or
                            proxy server), device and application identification
                            numbers, location, browser type, hardware model,
                            Internet service provider and/or mobile carrier,
                            operating system, and system configuration
                            information.
                        </li>
                        <li>
                            Location Data. We collect location data such as
                            information about your device's location, which can
                            be either precise or imprecise. How much information
                            we collect depends on the type and settings of the
                            device you use to access the Services. For example,
                            we may use GPS and other technologies to collect
                            geolocation data that tells us your current location
                            (based on your IP address). You can opt out of
                            allowing us to collect this information either by
                            refusing access to the information or by disabling
                            your Location setting on your device. However, if
                            you choose to opt out, you may not be able to use
                            certain aspects of the Services.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InformationWeCollect;
