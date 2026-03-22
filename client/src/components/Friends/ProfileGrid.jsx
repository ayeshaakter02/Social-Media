import ProfileCard from "./ProfileCard";

const ProfileGrid = () => {
  return (
    <div className="pt-7.75 min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((r, i) => (
          <ProfileCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;