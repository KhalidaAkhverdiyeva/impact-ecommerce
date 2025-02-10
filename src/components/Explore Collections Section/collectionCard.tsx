import React from "react";
import Image from "next/image";

const CollectionCard = () => {
  const collectionImages = [
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=600",
      title: "Kitchen",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg?v=1653309079&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-decoration.jpg?v=1653309079&width=600",
      title: "Decoration",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-office.jpg?v=1653309091&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-office.jpg?v=1653309091&width=600",
      title: "Office",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-lighting.jpg?v=1653309101&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-lighting.jpg?v=1653309101&width=600",
      title: "Lighting",
    },
    {
      mobileImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-books.jpg?v=1653309107&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-books.jpg?v=1653309107&width=600",
      title: "Books",
    },
  ];

  return (
    <div className="flex gap-[20px] px-[20px] md:px-[32px] lg:px-[48px] ">
      {collectionImages.map((image, index) => (
        <div
          key={index}
          className=" p-[20px] bg-[#F1F1F1]  overflow-hidden min-w-[200px]"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={image.webImg} />
            <Image
              src={image.mobileImg}
              alt={image.title}
              width={800}
              height={533}
              className="object-cover w-full h-auto"
            />
          </picture>
          <div className="text-center">
            <div className="font-[700] text-[#272727]">{image.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionCard;
