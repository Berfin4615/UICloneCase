import Announcements from "../components/layout/Announcements";
import { useMemo, useState } from "react";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePanel from "../components/profile/ProfilePanel";
import { profileTabs } from "../components/profile/profileTabs";

export default function ProfilePage() {
  const tabs = useMemo(() => profileTabs, []);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8">
        <ProfileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <ProfilePanel activeTab={activeTab} />
      </div>

      {activeTab === "home" && <Announcements />}
    </div>
  );
}
