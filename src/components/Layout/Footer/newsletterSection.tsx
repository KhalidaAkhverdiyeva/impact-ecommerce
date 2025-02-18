import { LuChevronRight } from "react-icons/lu";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const NewsletterSection = () => {
  const t = useTranslations("Footer");
  return (
    <div className="flex flex-col gap-[32px] lg:w-[45%]lg:mr-[30px]">
      <Image
        src="https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=300"
        alt="Logo"
        width={150}
        height={32}
      />
      <div className="flex flex-col gap-[24px]">
        <h4 className="leading-[1.1] text-[24px] md:text-[32px] lg:text-[36px] font-[800] text-[#272727]">
          {t("title")}
        </h4>
        <div className="flex justify-between border-[1px] border-solid border-[#E6E6E6] p-[14px]">
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent placeholder:text-[16px] placeholder:text-[#797979] flex-grow outline-none"
          />
          <button
            aria-label="Submit"
            className="bg-[#DDDDDD] rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-[#cccccc] transition duration-300"
          >
            <LuChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
