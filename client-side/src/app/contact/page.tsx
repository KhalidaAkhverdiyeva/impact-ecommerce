import { HeaderWhite } from "@/components/Layout/Header/header";
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

      <div className="flex max-w-[1600px] mx-auto flex-col lg:flex-row gap-[50px] py-[50px] lg:py-[100px] px-[20px] md:px-[48px] text-[#272727]">
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
        <div className="lg:flex-1 bg-[#F4F4F4] p-[24px] md:px-[48px] md:py-[40px] flex flex-col gap-[20px]">
          <div className="flex flex-col md:flex-row gap-[20px]">
            <input
              type="text"
              placeholder="Name"
              className="p-[16px] border border-solid border-[#2727271F] focus:border-[#272727] bg-transparent w-full outline-none"
              style={{ color: "rgba(39,39,39,0.6)" }}
            />
            <input
              type="text"
              placeholder="E-mail"
              className="p-[16px] border border-solid border-[#2727271F] focus:border-[#272727] bg-transparent w-full outline-none"
              style={{ color: "rgba(39,39,39,0.6)" }}
            />
          </div>

          <select
            className="p-[16px] border border-solid border-[#2727271F] focus:border-[#272727] bg-transparent w-full outline-none"
            style={{ color: "rgba(39,39,39,0.6)" }}
          >
            <option value="">Select Subject</option>
            <option value="Account">Account</option>
            <option value="Order">Order</option>
            <option value="Press">Press</option>
          </select>
          <textarea
            placeholder="Message"
            className="p-[16px] border border-solid border-[#2727271F] focus:border-[#272727] bg-transparent w-full h-[100px] resize-y outline-none"
            style={{ minHeight: "60px", color: "rgba(39,39,39,0.6)" }}
          ></textarea>
          <div className="bg-[#272727] w-[170px] py-[16px] px-[32px] text-center flex justify-center items-center gap-[10px]">
            <button className="text-white font-[700]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
