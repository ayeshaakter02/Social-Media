import InfoCard from "./InfoCard";

const ProfileInfo = () => {
  const interests = [
    {
      heading: "Favourite Tv Shows",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "Favourite Tv Shows",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "Favourite Tv Shows",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "Favourite Tv Shows",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
  ];

  const jobs = [
    {
      heading: "Lead custom designer",
     text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "Mernstack developer",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "Frontend developer",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
    {
      heading: "AWS",
      text: "Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.",
    },
  ];

  return (
    <div className="mt-8.25 ml-4.5 space-y-4">
      
      <InfoCard title="Interests" data={interests} />
      <InfoCard title="Jobs & Education" data={jobs} />

    </div>
  );
};

export default ProfileInfo;