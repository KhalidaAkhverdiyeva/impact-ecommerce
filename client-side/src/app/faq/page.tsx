import Accordion from "@/components/FAQ Accardion/accardion";
import { HeaderWhite } from "@/components/Layout/Header/header";
import MessageForm from "@/components/Message Form/messageForm";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const FAQPage = () => {
  return (
    <div>
      <HeaderWhite />
      <div className=" h-[560px] pt-[66px] relative overflow-hidden">
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/faq.jpg?v=1658917308&width=3200"
          alt="contact"
          className=" object-cover absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 ">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px] leading-[1]  text-center max-w-[760px]">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px]">
        <div className="px-[20px] py-[48px] md:px-[32px] lg:px-[48px]">
          <h2 className="text-[32px] text-[#272727] font-[800] text-center">
            Popular questions from our customers
          </h2>
          <div className="max-w-xl mx-auto mt-10 bg-[#F4F4F4]">
            <Accordion
              title="How do you calculate your shipping and handling charges?"
              content="We’re dedicated to offering the best shipping methods available to ensure that your order reaches you quickly and safely. Shipping rates will vary, based on the specified delivery method, shipping address and total price of the merchandise in your cart."
            />
            <Accordion
              title="Accordion Item 2"
              content="This is the content of the second accordion item."
            />
            <Accordion
              title="Accordion Item 3"
              content="This is the content of the third accordion item."
            />
          </div>
        </div>
      </div>

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
