"use client";
import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-207.5 ml-17.5 mt-20 mb-40 bg-white rounded-[15px] overflow-hidden font-poppins">
      
      {/* Tabs Header */}
      <div className="flex border-b border-[#D9D9D9] text-xs font-bold">
        <button
          onClick={() => setActiveTab("description")}
          className={`flex-1 py-5 ${
            activeTab === "description"
              ? "bg-[#7A77FD] text-white"
              : "text-black"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("comments")}
          className={`flex-1 py-5 ${
            activeTab === "comments"
              ? "bg-[#7A77FD] text-white"
              : "text-black"
          }`}
        >
          Comments
        </button>

        <button
          onClick={() => setActiveTab("review")}
          className={`flex-1 py-5 ${
            activeTab === "review"
              ? "bg-[#7A77FD] text-white"
              : "text-black"
          }`}
        >
          Review
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pt-15 pb-[174.54px] text-[#474747]">
        
        {activeTab === "description" && (
          <>
            <h2 className="text-xl font-bold mb-5 text-[#181828]">
              The Best eSports and Gaming Magazine Template!
            </h2>

            <p className="mb-7.5 text-[#474747] font-medium text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa. <br />

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3 className="text-xl font-bold mb-5 text-[#181828]">
              356+ HTML Elements Library included
            </h3>

            <p className="text-[#474747] font-medium text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
          </>
        )}

        {activeTab === "comments" && (
          <p className="mb-7.5 text-[#474747] font-medium text-base text-justify">No comments yet. Be the first to comment!</p>
        )}

        {activeTab === "review" && (
          <p className="mb-7.5 text-[#474747] font-medium text-base text-justify">No reviews yet. Add your review!</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;