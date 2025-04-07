import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type BlogCardProps = {
  imgSrc: string;
  id: string;
  title: string;
  description: string;
  date: string;
  comments: string;
  variant?: "default" | "detail";
};

const BlogCard: React.FC<BlogCardProps> = ({
  imgSrc,
  id,
  title,
  description,
  date,
  comments,
  variant = "default",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col lg:flex-col max-h-[692px] max-w-[1600px] mx-auto `}
    >
      <Link
        href={`/blog/${id}`}
        aria-label={title}
        className="cursor-pointer overflow-hidden relative"
      >
        <Image
          src={imgSrc}
          alt="Blog"
          width={600}
          height={400}
          className="relative transition-transform duration-500 ease-in-out hover:scale-105"
        />

        <button
          aria-label="Collection"
          className="absolute top-[10px] text-[12px] left-[10px] text-white font-[700] bg-[#3C619E] py-[3px] px-[8px]"
        >
          Collection
        </button>
      </Link>

      <div
        className={`flex-[40%] flex flex-col gap-[10px] lg:gap-[20px] py-[20px]`}
      >
        <Link
          href={`/blog/${id}`}
          aria-label={title}
          className={`font-[800] leading-[1.1] cursor-pointer text-[#272727] hover:underline ${
            variant === "default"
              ? "text-[26px] md:text-[36px]"
              : "text-[20px] md:text-[24px]"
          }`}
        >
          {title}
        </Link>
        {variant === "default" && (
          <p className="text-[14px] md:text-[16px] text-[#272727]">
            {description}
          </p>
        )}

        <div className="flex gap-[15px] items-center text-gray-600">
          {" "}
          <div className="flex items-center gap-[10px]">
            <div>
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                strokeWidth="1.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.372 1v2.877M10.455 1v2.877"
                  stroke="currentColor"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M14.338 7.632H1.497l.179-4.57 6.164-.448 6.497.448v4.57Z"
                  fill="currentColor"
                  fillOpacity=".12"
                ></path>
                <path
                  d="M1.224 12.073c.183 1.631 1.508 2.925 3.147 3.004a73.18 73.18 0 0 0 3.546.083c1.256 0 2.413-.028 3.546-.083 1.639-.079 2.964-1.374 3.146-3.004.124-1.099.225-2.224.225-3.37 0-1.147-.102-2.273-.225-3.371-.182-1.631-1.507-2.925-3.146-3.004a73.22 73.22 0 0 0-3.546-.083 73.22 73.22 0 0 0-3.546.083c-1.639.079-2.964 1.374-3.147 3.004C1.101 6.43 1 7.556 1 8.703c0 1.146.102 2.272.224 3.37ZM1.331 7.202h13.24"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-[12px] md:text-[14px]">{date}</div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div>
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                strokeWidth="1.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.602 1.881A6.961 6.961 0 1 1 5.6 14.318l-3.806.633a.57.57 0 0 1-.635-.745l.974-2.904a6.961 6.961 0 0 1 2.47-9.42Z"
                  fill="currentColor"
                  fillOpacity=".12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.5 6.286h5.572M5.5 9.714h4.214"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="text-[12px] md:text-[14px]">{comments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
