import Heading from "./Heading"

const PrivacyRights = () => {
  return (
      <section id="your_privacy_rights" className="py-8">
          <div>
              <Heading label="9. What are your privacy right?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: In some regions, such as the European Economic
                      Area (EEA), United Kingdom (UK), Switzerland, and Canada,
                      you have rights that allow you greater access to and
                      control over your personal information. You may review,
                      change, or terminate your account at any time.
                  </p>
                  <p>
                      In some regions (like the EEA, UK, Switzerland, and
                      Canada), you have certain rights under applicable data
                      protection laws. These may include the right (i) to
                      request access and obtain a copy of your personal
                      information, (ii) to request rectification or erasure;
                      (iii) to restrict the processing of your personal
                      information; (iv) if applicable, to data portability; and
                      (v) not to be subject to automated decision-making. In
                      certain circumstances, you may also have the right to
                      object to the processing of your personal information. You
                      can make such a request by contacting us by using the
                      contact details provided in the section{" "}
                      <a href="#contact" className="text-primary-600">
                          HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                      </a>{" "}
                      below.
                  </p>
                  <p>
                      We will consider and act upon any request in accordance
                      with applicable data protection laws.
                  </p>
                  <p>
                      If you are located in the EEA or UK and you believe we are
                      unlawfully processing your personal information, you also
                      have the right to complain to your Member State data
                      protection authority or UK data protection authority.
                  </p>
                  <p>
                      If you are located in Switzerland, you may contact the
                      Federal Data Protection and Information Commissioner.
                  </p>
                  <h4 className="text-lg">Withdrawing your consent:</h4>
                  <p>
                      If we are relying on your consent to process your personal
                      information, which may be express and/or implied consent
                      depending on the applicable law, you have the right to
                      withdraw your consent at any time. You can withdraw your
                      consent at any time by contacting us by using the contact
                      details provided in the section{" "}
                      <a href="#contact" className="text-primary-600">
                          HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                      </a>{" "}
                      below or updating your preferences.
                  </p>
                  <p>
                      However, please note that this will not affect the
                      lawfulness of the processing before its withdrawal nor,
                      when applicable law allows, will it affect the processing
                      of your personal information conducted in reliance on
                      lawful processing grounds other than consent.
                  </p>
                  <h4 className="text-lg">
                      Opting out of marketing and promotional communications:
                  </h4>
                  <p>
                      You can unsubscribe from our marketing and promotional
                      communications at any time by clicking on the unsubscribe
                      link in the emails that we send, or by contacting us using
                      the details provided in the section{" "}
                      <a href="#contact" className="text-primary-600">
                          HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                      </a>{" "}
                      below. You will then be removed from the marketing lists.
                      However, we may still communicate with you — for example,
                      to send you service-related messages that are necessary
                      for the administration and use of your account, to respond
                      to service requests, or for other non-marketing purposes.
                  </p>
                  <h4 className="text-lg">Account Information</h4>
                  <p>
                      If you would at any time like to review or change the
                      information in your account or terminate your account, you
                      can:
                  </p>
                  <ul className="list-disc pl-8">
                      <li>
                          Log in to your account settings and update your user
                          account.
                      </li>
                  </ul>
                  <p>
                      Upon your request to terminate your account, we will
                      deactivate or delete your account and information from our
                      active databases. However, we may retain some information
                      in our files to prevent fraud, troubleshoot problems,
                      assist with any investigations, enforce our legal terms
                      and/or comply with applicable legal requirements.
                  </p>
                  <h4 className="text-lg">Cookies and similar technologies:</h4>
                  <p>
                      Most Web browsers are set to accept cookies by default. If
                      you prefer, you can usually choose to set your browser to
                      remove cookies and to reject cookies. If you choose to
                      remove cookies or reject cookies, this could affect
                      certain features or services of our Services. If you have
                      questions or comments about your privacy rights, you may
                      email us at{" "}
                      <a href="mailto:privacy@waanverse.com">
                          {" "}
                          privacy@waanverse.com
                      </a>
                  </p>
              </div>
          </div>
      </section>
  );
}

export default PrivacyRights
