import Accordion from "@/components/FAQ Accardion/accardion";
import { Header } from "@/components/Layout/Header/header";
import MessageForm from "@/components/Message Form/messageForm";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";
import Image from "next/image";

const FAQPage = () => {
  return (
    <div>
      <Header transparent={false} />
      <div className=" h-[560px] pt-[66px] relative overflow-hidden">
        <Image
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/faq.jpg?v=1658917308&width=3200"
          alt="contact"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 ">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px] leading-[1]  text-center max-w-[760px]">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-[960px]">
        <div className="px-[20px] py-[72px] md:px-[32px] lg:px-[48px]">
          <h2 className="text-[34px] md:text-[46px] lg:text-[60px] text-[#272727] font-[800] text-center leading-[1]">
            Popular questions from our customers
          </h2>
          <div className=" mx-auto mt-10 bg-[#F4F4F4]">
            <Accordion
              title="How do you calculate your shipping and handling charges?"
              content="We're dedicated to offering the best shipping methods available to ensure that your order reaches you quickly and safely. Shipping rates will vary, based on the specified delivery method, shipping address and total price of the merchandise in your cart."
            />
            <Accordion
              title="Do you charge sales tax?"
              content="Please know, your order(s) will be taxed unless valid tax exemption documentation has been received prior to order placement. Please visit your local store or contact us for additional questions or support."
            />
            
            <Accordion
              title="How is my order payment processed?"
              content="When you place an order, we contact the issuing bank to confirm the validity of the payment method. Your bank reserves the funds until the transaction processes or the authorization expires, but this isn't an actual charge. Some banks call authorizations "pending" or "processing" charges. For more information on specific policies regarding authorizations, contact the issuing bank."
            />
            <Accordion
              isLast
              title="What if I received damaged or incorrect merchandise?"
              content="In the event that you receive defective, incorrect or incomplete merchandise, please contact us right away so we can make it right. For faster assistance with a return or exchange claim, please email us at help@yourdomain.com with your order number, contact information and photos documenting possible damages (if applicable). Please retain all items and packaging materials until your claim is resolved. If your replacement item is backordered or out of stock, we'll notify you as soon as we have the estimated arrival date, or we may work with you to suggest a suitable replacement."
            />
          </div>
          <div className="flex flex-col items-center gap-[6px] pt-[40px]">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/team-fff.png?v=1660058616&width=320"
                alt="Support team"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-[#272727] text-[14px] md:text-[16px]">
              Our customer support is available Monday to Friday: 8am-8:30pm.
            </p>
            <p className="text-[#272727B3] text-[14px] md:text-[16px]">
              Average answer time: 24h
            </p>
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
