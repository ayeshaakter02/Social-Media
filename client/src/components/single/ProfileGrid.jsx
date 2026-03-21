import ProfileCard from "./ProfileCard";

const ProfileGrid = () => {
  return (
    <div className="p-6 bg-[#F4F4F6] min-h-screen">
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProfileCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;