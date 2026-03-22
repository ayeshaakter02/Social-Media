import { FaSearch } from "react-icons/fa";

const FriendsHeader = () => {
  return (
    <div className="pt-15.5 font-poppins">
      
      {/* Title */}
      <div className="mb-9.75">
        <p className="text-sm text-[#AFB0C0] uppercase font-normal">
          Browse Ayesha Akter
        </p>
        <h2 className="mt-1 text-2xl font-medium text-[#24234B]">
          Friends 82
        </h2>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-[10px] pl-6.25 pt-5.5 pb-3.75 flex items-center justify-between">
        
        {/* Input */}
        <input
          type="text"
          placeholder="Search Friends"
          className="rounded-[10px] outline-none border border-[#D9D9D9] text-[15px] font-normal text-[#D9D9D9] px-3.75 pt-3.25 pb-3 relative  w-179.25"
        />

        {/* Search Button */}
        <button className="w-21 h-12 flex items-center justify-center rounded-[10px] bg-[#23D2E2] text-white absolute ml-164.5">
          <FaSearch className="w-6.25 h-6.25"/>
        </button>
      </div>
    </div>
  );
};

export default FriendsHeader;