import { Header } from "@/components/Layout/Header/header";
import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Header transparent={false} />
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] py-[50px]">
        <div className="flex flex-colin blog detail page i need you to make some style chnages. make color bg for colored. on the left there should be big image and on the right Title and other stuff and under them there shoudl be other images and texts  gap-[40px]">
          {/* Blog Header */}
          <div className="flex flex-col gap-[20px]">
            <button
              aria-label="News"
              className="text-[16px] font-[700] bg-[#272727] bg-opacity-15 py-[6px] px-[20px] w-fit"
            >
              News
            </button>
            <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-[800] leading-[1.1]">
              Back to the office
            </h1>
            <div className="flex gap-[12px] md:text-[14px] items-center">
              <div className="flex gap-[10px]">
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
                <div className="text-[12px] md:text-[14px]">May 23, 2022</div>
              </div>
              <div className="flex gap-[10px]">
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
                <div className="text-[12px] md:text-[14px]">2 comments</div>
              </div>
            </div>
          </div>

          {/* Blog Image */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[800px]">
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=2000"
              alt="Blog post image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
