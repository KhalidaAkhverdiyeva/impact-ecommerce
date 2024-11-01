import React from "react";

type BlogCardProps = {
  imgSrc: string;
  bgColor: string;
  flexDirection?: "row" | "col";
};

const BlogCard: React.FC<BlogCardProps> = ({
  imgSrc,
  bgColor,
  flexDirection = "row",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-${flexDirection} max-h-[692px] max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]`}
    >
      <div className="flex-[75%]  cursor-pointer overflow-hidden">
        <img
          src={imgSrc}
          alt="Blog"
          className="w-[100%] h-[100%] transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      <div
        className={`flex-[40%] ${bgColor} flex flex-col gap-[20px] p-[20px] md:p-[48px]`}
      >
        <div>
          <button className="text-[16px] font-[700] bg-[#272727] bg-opacity-10 py-[6px] px-[16px]">
            Inspiration
          </button>
        </div>

        <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-[800] leading-[1.1] cursor-pointer text-[#272727]">
          Back to the office
        </h2>
        <p className="text-[18px] md:text-[20px]">
          Explore our most comfortable collections and bring warmth to the
          places you gather with friends and loved ones.
        </p>
        <div className="flex gap-[12px] md:text-[14px] items-center text-[#645d46]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                stroke-width="1.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.372 1v2.877M10.455 1v2.877"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M14.338 7.632H1.497l.179-4.57 6.164-.448 6.497.448v4.57Z"
                  fill="currentColor"
                  fill-opacity=".12"
                ></path>
                <path
                  d="M1.224 12.073c.183 1.631 1.508 2.925 3.147 3.004a73.18 73.18 0 0 0 3.546.083c1.256 0 2.413-.028 3.546-.083 1.639-.079 2.964-1.374 3.146-3.004.124-1.099.225-2.224.225-3.37 0-1.147-.102-2.273-.225-3.371-.182-1.631-1.507-2.925-3.146-3.004a73.22 73.22 0 0 0-3.546-.083 73.22 73.22 0 0 0-3.546.083c-1.639.079-2.964 1.374-3.147 3.004C1.101 6.43 1 7.556 1 8.703c0 1.146.102 2.272.224 3.37ZM1.331 7.202h13.24"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <div className="text-[12px] md:text-[14px]">May 23, 2022</div>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                stroke-width="1.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.602 1.881A6.961 6.961 0 1 1 5.6 14.318l-3.806.633a.57.57 0 0 1-.635-.745l.974-2.904a6.961 6.961 0 0 1 2.47-9.42Z"
                  fill="currentColor"
                  fill-opacity=".12"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.5 6.286h5.572M5.5 9.714h4.214"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="text-[12px] md:text-[14px]">2 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
