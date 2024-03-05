import { ContentLink } from ".";

const TableOfContent = () => {
  return (
      <div>
          <h3 className="text-2xl">Table of Contents</h3>
          <ul className="list-decimal pl-4">
              <ContentLink
                  path="information_we_collect"
                  label="What information do we collect?"
              />
              <ContentLink
                  path="how_we_process_information"
                  label="How do we process your Information?"
              />
              <ContentLink
                  path="legal_bases_to_process_data"
                  label="What legal bases do we rely on to process your information?"
              />
              <ContentLink
                  path="sharing_information"
                  label="When and with whom do we share your personal information?"
              />
              <ContentLink
                  path="cookies"
                  label="Do we use cookies and other tracking technologies?"
              />
              <ContentLink
                  path="social_logins"
                  label="Do we handle your social logins"
              />
              <ContentLink
                  path="keeping_information"
                  label="How long do we keep your information?"
              />
              <ContentLink
                  path="information_safety"
                  label="Do we keep your information safe?"
              />
              <ContentLink path="your_privacy_rights" label="What are your privacy rights?" />
              <ContentLink
                  path="dont_track"
                  label="Controls for do-not-track signals"
              />
              <ContentLink
                  path="us_residents"
                  label="Do United States citizens have specific privacy rights?"
              />
<ContentLink
                  path="updates"
                  label="Do we update our Privacy Policy when necessary?"
              />
              <ContentLink
                  path="update_information"
                  label="How can you review, update, or delete your personal information?"
              />
              <ContentLink
                  path="contact"
                  label="How do you contact us about our policies?"
              />
          </ul>
      </div>
  );
}

export default TableOfContent
