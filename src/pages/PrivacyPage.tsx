import {
  Banner,
  TableOfContent,
  InformationWeCollect,
  Intro,
  SocialLogins,
  PrivacyRights,
  HowWeProcessInformation,
  LegalBases,
  SharingInformation,
  Cookies,
  KeepingInformation,
  InformationSafety,
  Contact,
  DontTrack,
  USResidents,
  Updates,
  UpdateInformation,
} from "../components/Partials/Privacy";
import Seo from "../components/utils/Seo";

const PrivacyPage = () => {
  return (
    <Seo
      title="Privacy Policy: Your Privacy Matters to Us"
      description="We are committed to protecting your privacy and ensuring the security of your personal information. This page outlines how we collect, use, and safeguard your data when you interact with our website or services. We value transparency and want you to feel confident about how your information is handled."
    >
      <Banner />

      <section className="bg-white overflow-y-auto dark:bg-gray-950 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6">
          <Intro />
        </div>
        <div className="flex px-4 py-8">
          <div className="sm:w-[40%] sm:flex hidden">
            <TableOfContent />
          </div>
          <div className="w-full sm:ml-10">
            <div>
              <InformationWeCollect />
              <HowWeProcessInformation />
              <LegalBases />
              <SharingInformation />
              <Cookies />
              <SocialLogins />
              <KeepingInformation />
              <InformationSafety />
              <PrivacyRights />
              <DontTrack />
              <USResidents />
              <Updates />
              <UpdateInformation />
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default PrivacyPage;
