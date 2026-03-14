"use client";
import Header from "@/components/common/Header";
import ProfileSidebar from "@/components/common/ProfileSidebar";
import Settingsbar from "@/components/common/Settingsbar";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      <div className="flex justify-between bg-[#F5F5F5]">
        <ProfileSidebar />
        {children}
        <Settingsbar />
      </div>
    </main>
  );
}
