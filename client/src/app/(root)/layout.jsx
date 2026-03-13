"use client"
import Header from "@/components/common/Header";
import ProfileSidebar from "@/components/common/ProfileSidebar";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header/>
      <div className="grid grid-cols-3 bg-[#F5F5F5]">
        <ProfileSidebar/>
      {children}
      </div>
      
    </main>
  );
}
