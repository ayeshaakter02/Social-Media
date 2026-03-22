import { BsThreeDots } from "react-icons/bs";

const InfoCard = ({ title, data }) => {
  return (
    <div className="bg-white rounded-[15px] pl-7.5 pt-3.5 pr-10.25 pb-6.5 font-poppins">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5.25 font-bold text-[#3E3F5E] text-sm">
        <h3>{title}</h3>
        <BsThreeDots className="cursor-pointer" />
      </div>

      {/* Content */}
      <div className="space-y-3.75">
  {data && data.length > 0 ? (
    data.map((item, index) => (
      <div className=" text-xs w-130.75" key={index}>
        <p className="font-medium">
          {item.heading}
        </p>
        <p className="text-[#181828] mt-1.5 font-normal">
          {item.text}
        </p>
      </div>
    ))
  ) : (
    <p className="text-sm text-gray-400">No data available</p>
  )}
</div>
    </div>
  );
};

export default InfoCard;