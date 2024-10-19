import { HeaderWhite } from "@/components/Layout/Header/header";
import MessageForm from "@/components/Message Form/messageForm";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const ContactPage = () => {
  return (
    <div className="relative ">
      <HeaderWhite />
      <div className=" h-[560px] pt-[66px] relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/contact_59ff1b68-5bdb-4f37-a49a-d5c90d752229.jpg?v=1658915384&width=2800"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/contact_mobile_cb11b921-e851-486f-8c06-3ae5fcb651c0.jpg?v=1658915395&width=800"
            alt="contact"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px]  text-center">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="flex max-w-[1600px] mx-auto flex-col lg:flex-row gap-[50px] py-[50px] lg:py-[100px] px-[20px] md:px-[32px] lg:px-[48px] text-[#272727]">
        <div className="flex flex-col lg:flex-1 gap-[10px] lg:gap-[20px]">
          <p className="text-[18px] font-[800]">Send a message</p>
          <h4 className="text-[34px] lg:text-[40px] font-[900] leading-[1]">
            Do you have any questions?
          </h4>
          <p className="text-[14px] lg:text-[18px] text-[#393939]">
            We are experiencing higher than normal volume and are working to
            respond as timely as possible. Please note that it may take us up to
            2 business days to reply. We appreciate your patience during this
            time.
          </p>
        </div>
        <MessageForm bgColor="#EFEFEF" />
      </div>
      <section className="md:px-[32px]">
        <div className="bg-[#3C619E] max-w-[1600px] md:p-[50px] lg:p-[70px] mx-auto text-white flex flex-col gap-[20px] items-center ">
          <div className="text-[32px] md:text-[40px] lg:text-[48px] font-[900]">
            Email us directly
          </div>
          <div className="text-[14px] md:text-[16px] underline">
            help@yourdomain.com
          </div>
          <div className=" text-[14px] md:text-[16px] max-w-[650px] text-center">
            We are available from monday to saturday. Our customer service will
            get back to you as soon as possible.
          </div>
        </div>
      </section>
      <ShopifySection />
    </div>
  );
};

export default ContactPage;
