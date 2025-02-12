import React from "react";

interface MessageFormProps {
  bgColor?: string;
}

const MessageForm: React.FC<MessageFormProps> = ({ bgColor = "#F4F4F4" }) => {
  return (
    <div
      className={`lg:flex-1 p-[24px] md:px-[32px] lg:px-[48px] md:py-[40px] flex flex-col gap-[20px]`}
      style={{ backgroundColor: bgColor }}
    >
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
        <button 
        aria-label="Subscribe"  
        className="text-white font-[700]">Subscribe</button>
      </div>
    </div>
  );
};

export default MessageForm;
