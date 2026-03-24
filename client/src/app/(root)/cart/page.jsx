import CartHeader from "@/components/Cart/CartHeader";
import ItemGrid from "@/components/Cart/ItemGrid";
import ItemHeader from "@/components/Cart/ItemHeader";
import OrderSummary from "@/components/Cart/OrderSummary";
import PromoCode from "@/components/Cart/PromoCode";
import MarketPlace from "@/components/common/MarketPlace";
import React from "react";

const page = () => {
  return (
    <div className="mt-9 mx-auto mb-29">
      <MarketPlace />
      <CartHeader />
      <ItemHeader/>
      <div className="flex items-start">
        <div>
          <ItemGrid />
          <PromoCode />
        </div>
        <OrderSummary/>
      </div>
    </div>
  );
};

export default page;
