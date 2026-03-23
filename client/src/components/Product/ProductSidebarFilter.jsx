import React from "react";
import { FaStar } from "react-icons/fa";

const ProductSidebarFilter = () => {
  const categories = [
    { name: "All Categories", count: 1207 },
    { name: "Psd Templates", count: 134 },
    { name: "HTML Templates", count: 134 },
    { name: "WP Templates", count: 134 },
    { name: "Illustration", count: 134 },
    { name: "Logos and badges", count: 134 },
  ];

  const reviews = [
    { stars: 5, label: "4+", count: 1207 },
    { stars: 5, label: "4+", count: 1207 },
    { stars: 5, label: "4+", count: 1207 },
    { stars: 5, label: "4+", count: 1207 },
  ];

  return (
    <div
      className="w-71 
                    bg-white rounded-[15px] pt-7.5 pb-6.5 px-3.75 
                    mx-auto md:mx-0 font-poppins"
    >
      {/* Categories */}
      <div>
        <h2 className="font-bold mb-3.25 text-sm">Categories</h2>

        <div className="space-y-2.5">
          {categories.map((item, i) => (
            <div key={i} className="flex justify-between text-sm font-medium">
              <span className="text-[#AFB0C0]">{item.name}</span>
              <span className="text-[#23D2E2]">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h2 className="font-bold text-sm mt-7.25 mb-6.25">Price Range</h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-6.25">
          <input
            type="text"
            placeholder="From"
            className="product-price pl-5"
          />
          <input
            type="text"
            placeholder="To"
            className="product-price px-7.75"
          />
        </div>

        <button className="w-57 bg-[#23D2E2] text-white pb-2.5 pt-2.25 pl-13.75 rounded-[11px] text-sm font-medium mb-9.75">
          Apply Price Filter
        </button>
      </div>

      {/* Reviews */}
      <div className="pr-6.75">
        <h2 className="font-bold mb-5.5 text-sm">Reviews</h2>

        <div className="flex justify-between text-sm mb-2.5">
          <span className="text-[#45437F] font-bold">All reviews</span>
          <span className="text-[#23D2E2] font-normal">1207</span>
        </div>

        <div className="space-y-2.5">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-sm md:text-base"
            >
              <div className="flex items-center gap-2.75">
                <div className="text-[#FCE730] flex gap-0.75">
                  <FaStar className='w-2.75 h-2.5'/>
                  <FaStar className='w-2.75 h-2.5'/>
                  <FaStar className='w-2.75 h-2.5'/>
                  <FaStar className='w-2.75 h-2.5'/>
                  <FaStar className='w-2.75 h-2.5'/>
                </div>
                <span className="text-[#3E3F5E] text-sm font-medium">
                  {item.label}
                </span>
              </div>

              <span className="text-[#23D2E2] font-normal text-sm">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSidebarFilter;
