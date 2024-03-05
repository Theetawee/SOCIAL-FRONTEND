import Heading from "./Heading"

const InformationSafety = () => {
  return (
      <section id="information_safety" className="py-8">
          <div>
              <Heading label="8. How do we protect your information and keep it safe?" />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: We aim to protect your personal information
                      through a system of organisational and technical security
                      measures.
                  </p>
                  <p>
                      We have implemented appropriate and reasonable technical
                      and organisational security measures designed to protect
                      the security of any personal information we process.
                      However, despite our safeguards and efforts to secure your
                      information, no electronic transmission over the Internet
                      or information storage technology can be guaranteed to be
                      100% secure, so we cannot promise or guarantee that
                      hackers, cybercriminals, or other unauthorised third
                      parties will not be able to defeat our security and
                      improperly collect, access, steal, or modify your
                      information. Although we will do our best to protect your
                      personal information, transmission of personal information
                      to and from our Services is at your own risk. You should
                      only access the Services within a secure environment.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default InformationSafety
