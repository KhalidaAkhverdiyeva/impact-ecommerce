import { HeaderWhite } from "@/components/Layout/Header/header";
import MessageForm from "@/components/Message Form/messageForm";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const FAQPage = () => {
  return (
    <div>
      <HeaderWhite />
      <div className="bg-[#EFEFEF]">
        <div className=" max-w-[900px] mx-auto  flex flex-col px-[20px] md:px-[32px] lg:px-[48px] py-[50px] lg:py-[78px]">
          <div className="flex flex-col gap-[20px] text-[#272727] pb-[48px]">
            <div className="text-[14px] md:text-[18px] font-[800] text-center">
              Contact Us
            </div>
            <h2 className="text-[34px] md:text-[44px] lg:text-[50px] font-[800] leading-[1] text-center">
              Do you have any questions?
            </h2>
            <p className="text-center text-[14px] md:text-[16px]">
              If you do not find the answer to your question in our FAQ, you can
              send us a message by filling out the form below.
            </p>
          </div>
          <MessageForm bgColor="white" />
        </div>
      </div>

      <ShopifySection />
    </div>
  );
};

export default FAQPage;
