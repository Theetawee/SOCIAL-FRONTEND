import Heading from "./Heading"

const SharingInformation = () => {
  return (
      <section id="sharing_information">
          <div>
              <Heading
                  label="4. When and with whom do we share your personal information?
"
              />
              <div className="grid grid-cols-1 gap-3">
                  <p className="italic">
                      In Short: We may share information in specific situations
                      described in this section and/or with the following third
                      parties.
                  </p>
                  <p>
                      We may need to share your personal information in the
                      following situations:
                  </p>
                  <ul className="list-disc pl-8">
                      <li>
                          Business Transfers. We may share or transfer your
                          information in connection with, or during negotiations
                          of, any merger, sale of company assets, financing, or
                          acquisition of all or a portion of our business to
                          another company.
                      </li>
                      <li>
                          When we use Google Analytics. We may share your
                          information with Google Analytics to track and analyze
                          the use of the Services. The Google Analytics
                          Advertising Features that we may use include: Google
                          Analytics Demographics and Interests Reporting. To opt
                          out of being tracked by Google Analytics across the
                          Services. For more information on the privacy
                          practices of Google, please visit the Google Privacy &
                          Terms page.
                      </li>
                      <li>
                          When we use Google Maps Platform APIs. We may share
                          your information with certain Google Maps Platform
                          APIs (e.g. Google Maps API, Places API). We obtain and
                          store on your device ('cache') your location. You may
                          revoke your consent anytime by contacting us at the
                          contact details provided at the end of this document.
                      </li>
                      <li>
                          Other Users. When you share personal information (for
                          example, by posting comments, contributions, or other
                          content to the Services) or otherwise interact with
                          public areas of the Services, such personal
                          information may be viewed by all users and may be
                          publicly made available outside the Services in
                          perpetuity. If you interact with other users of our
                          Services and register for our Services through a
                          social network (such as Facebook), your contacts on
                          the social network will see your name, profile photo,
                          and descriptions of your activity. Similarly, other
                          users will be able to view descriptions of your
                          activity, communicate with you within our Services,
                          and view your profile.
                      </li>
                      
                  </ul>
              </div>
          </div>
      </section>
  );
}

export default SharingInformation
