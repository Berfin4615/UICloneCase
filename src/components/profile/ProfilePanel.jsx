import ProfileHero from "./ProfileHero";
import PersonalInfo from "./tabs/PersonalInfo";
import Applications from "./tabs/Applications";
import Papers from "./tabs/Papers";
import Certificates from "./tabs/Certificates";
import Settings from "./tabs/Settings";

export default function ProfilePanel({ activeTab }) {
  return (
    <div className="border border-gray-200 rounded-b-xl rounded-tr-xl bg-white w-full px-4 sm:px-8 lg:px-10 py-6 sm:py-10">
      {activeTab === "home" && <ProfileHero />}
      {activeTab === "personal" && <PersonalInfo />}
      {activeTab === "applications" && <Applications />}
      {activeTab === "papers" && <Papers />}
      {activeTab === "certificates" && <Certificates />}
      {activeTab === "settings" && <Settings />}
    </div>
  );
}
