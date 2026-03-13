"use client"
import Header from "@/components/common/Header";
import ProfileSidebar from "@/components/common/ProfileSidebar";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header/>
      <ProfileSidebar/>
      {children}
    </main>
  );
}
