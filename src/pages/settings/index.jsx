import React from "react";
import SettingsSidebar from "../../component/settings/SettingsSidebar";
import PersonalInfo from "../../pages/settings/personal-info";

function Settings() {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px]">
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-white dark:bg-darkblack-600 rounded-xl">
        <SettingsSidebar />
      </div>
      <div className="my-5">
        <PersonalInfo />
      </div>
    </main>
  );
}

export default Settings;
