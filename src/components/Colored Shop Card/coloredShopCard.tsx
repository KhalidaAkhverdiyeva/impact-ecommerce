import React from "react";
import Image from "next/image";

interface ColoredShopCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  imageUrls: {
    small: string;
    medium: string;
    large: string;
  };
}

const ColoredShopCard: React.FC<ColoredShopCardProps> = ({
  title,
  description,
  buttonText,
  buttonColor,
  imageUrls,
}) => {
  return (
    <div className="px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="flex flex-col lg:flex-row lg:items-center max-w-[1600px] mx-auto">
        <div className="lg:order-1 lg:w-[50%]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={imageUrls.large} />
            <source media="(min-width: 768px)" srcSet={imageUrls.medium} />
            <Image
              src={imageUrls.small} // Dynamic source from `imageUrls.small`
              alt="Product Image"
              width={800} // Set the width of the image based on your layout
              height={533} // Adjust the height based on the aspect ratio
              className="object-cover w-full h-auto"
            />
          </picture>
        </div>
        <div className="px-[32px] py-[40px] md:p-[64px] lg:p-[80px] text-[#272727] lg:w-[50%]">
          <h2 className="text-[34px] md:text-[44px] font-[900] leading-[1.1]">
            {title}
          </h2>
          <p className="pt-[20px] leading-[1.2] md:leading-[1.5] text-[#444444]">
            {description}
          </p>
          <button
            className="mt-[24px] py-[16px] px-[32px] font-[800]"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColoredShopCard;
