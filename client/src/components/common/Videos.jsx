import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const Videos = () => {
  return (
    <div className="mt-3 bg-white rounded-[15px] w-70.75 px-7.25 py-4.75">
      <div className="flex justify-between items-center mb-4.75">
        <p className="font-poppins font-bold text-xs">
          Photos <span className="text-[#23D2E2]">37</span>
        </p>
        <HiDotsHorizontal className="font-poppins font-normal text-[30px]" />
      </div>
      <div className="w-56.25 bg-[#615DFA] py-[28.8px] rounded-2xl flex justify-center items-center"><img src="./images/play.png" alt="" /></div>
            <div className="my-4.75 w-56.25 bg-[#24234B] py-[28.8px] rounded-2xl flex justify-center items-center"><img src="./images/play.png" alt="" /></div>
                  <div className="w-56.25 bg-[#615DFA] py-[28.8px] rounded-2xl flex justify-center items-center"><img src="./images/play.png" alt="" /></div>
    </div>
  );
};

export default Videos;
