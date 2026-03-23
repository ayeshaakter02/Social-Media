import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-[15px] overflow-hidden font-poppins w-70.25">
      
      {/* Image */}
      <div className="relative">
        <div className="h-45 bg-[#615DFA]"></div>

        {/* Price Tag */}
        <div className="absolute -bottom-3 right-3.5 bg-white pl-5.75 pr-6 pt-1.25 pb-1 rounded-3xl text-sm font-bold shadow text-[#615DFA]">
          $12
        </div>
      </div>

      {/* Content */}
      <div className="pl-7.5 pr-8 pt-6.5">
        <h3 className="font-bold text-[16px]">
          Intel Pentium G6400 10th Gen Special Deal PC
        </h3>

        <div className="flex items-center gap-1.25 mt-2.25 mb-3.25 text-sm font-light">
          <span className="w-2.5 h-2.5 bg-[#23D2E2] rounded-full"></span>
          Laptop
        </div>

        <Link href={"/categories"} className="text-[13px] font-light text-[#615DFA] cursor-pointer border-b border-[#615DFA]">
          Full Screen View
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex mt-6.5">
        <button className="profile-card border-r border-[#23D2E2]">
          Add To Cart
        </button>
        <button className="profile-card pb-3 ">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;