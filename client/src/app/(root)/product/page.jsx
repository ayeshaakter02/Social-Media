import MarketPlace from "@/components/common/MarketPlace";
import Pagenation from "@/components/common/Pagenation";
import ProductGrid from "@/components/Product/ProductGrid";
import ProductHeader from "@/components/Product/ProductHeader";
import ProductSidebarFilter from "@/components/Product/ProductSidebarFilter";
import React from "react";

const page = () => {
  return (
    <div className="mt-9 mx-auto">
      <MarketPlace />
      <ProductHeader />
      <div className="flex items-start gap-3.5">
        <ProductSidebarFilter />
        <ProductGrid />
      </div>
      <div className="mt-7.5">
        <Pagenation/>
      </div>
      
    </div>
  );
};

export default page;
