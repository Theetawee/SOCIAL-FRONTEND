import Heading from "./Heading"

const HowWeProcessInformation = () => {
  return (
      <section id="how_we_process_information" className="py-8">
          <Heading label="2. How does Waanverse process your information?" />
          <div className="grid grid-cols-1 gap-3">
              <p className="italic">
                  In Short: We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
              </p>
              <p className="text-lg">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-8">
                  <li>
                      To facilitate account creation and authentication and
                      otherwise manage user accounts. We may process your
                      information so you can create and log in to your account,
                      as well as keep your account in working order.
                  </li>
                  <li>
                      To deliver and facilitate delivery of services to the
                      user. We may process your information to provide you with
                      the requested service.
                  </li>
                  <li>
                      To respond to user inquiries/offer support to users. We
                      may process your information to respond to your inquiries
                      and solve any potential issues you might have with the
                      requested service.
                  </li>
                  <li>
                      To send administrative information to you. We may process
                      your information to send you details about our products
                      and services, changes to our terms and policies, and other
                      similar information.
                  </li>
                  <li>
                      To enable user-to-user communications. We may process your
                      information if you choose to use any of our offerings that
                      allow for communication with another user.
                  </li>
                  <li>
                      To request feedback. We may process your information when
                      necessary to request feedback and to contact you about
                      your use of our Services.
                  </li>
                  <li>
                      To send you marketing and promotional communications. We
                      may process the personal information you send to us for
                      our marketing purposes, if this is in accordance with your
                      marketing preferences. You can opt out of our marketing
                      emails at any time. For more information, see{" "}
                      <a
                          href="#your_privacy_rights"
                          className="text-primary-600"
                      >
                          WHAT ARE YOUR PRIVACY RIGHTS?
                      </a>{" "}
                      below.
                  </li>
                  <li>
                      To deliver targeted advertising to you. We may process
                      your information to develop and display personalised
                      content and advertising tailored to your interests,
                      location, and more.
                  </li>
                  <li>
                      To protect our Services. We may process your information
                      as part of our efforts to keep our Services safe and
                      secure, including fraud monitoring and prevention.
                  </li>
                  <li>
                      To identify usage trends. We may process information about
                      how you use our Services to better understand how they are
                      being used so we can improve them.
                  </li>
                  <li>
                      To determine the effectiveness of our marketing and
                      promotional campaigns. We may process your information to
                      better understand how to provide marketing and promotional
                      campaigns that are most relevant to you.
                  </li>
                  <li>
                      To save or protect an individual's vital interest. We may
                      process your information when necessary to save or protect
                      an individual’s vital interest, such as to prevent harm.
                  </li>
              </ul>
          </div>
      </section>
  );
}

export default HowWeProcessInformation
