import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { NewsletterSection } from "./newsletterSection";
import { PaymentMethods } from "./paymentMethods";
import { FooterLinks } from "./footerLinks";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] py-[48px] flex justify-center mx-auto">
      <div className="px-[20px] md:px-[32px] lg:px-[48px] flex flex-col lg:gap-[64px] max-w-[1600px]">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <NewsletterSection />
          <FooterLinks />
          <div className="lg:w-1/4">
            <h4 className="font-[800] text-[18px] text-[#272727] mb-[4px]">
              About
            </h4>
            <p className="text-[#797979] text-[16px]">
              Thanks to <span className="underline">Article London</span> for
              allowing us to use their products in this demo store and HAY for
              the photography.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] py-[40px] lg:py-[0px]">
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <div className="flex items-center gap-[10px]">
              <FaFacebookF size={26} />
              <FaInstagram size={26} />
            </div>
          </div>
          <div className="flex gap-[20px] lg:gap-[0px] flex-col lg:flex-row justify-between">
            <p className="text-[14px]">
              © 2024, Impact Theme Home.Powered by Shopify
            </p>
            <PaymentMethods />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
