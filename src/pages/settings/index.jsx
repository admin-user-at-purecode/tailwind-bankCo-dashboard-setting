import SettingsSidebar from "../../component/settings/SettingsSidebar";
import PersonalInfo from "../../pages/settings/personal-info";

function Settings() {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px]">
      <SettingsSidebar />
      <PersonalInfo />

    </main>
  );
}

export default Settings;
