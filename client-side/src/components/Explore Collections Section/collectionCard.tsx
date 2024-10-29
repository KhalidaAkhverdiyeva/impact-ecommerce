import React from "react";

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
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=300",
      webImg:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/links-kitchen.jpg?v=1653309043&width=600",
      title: "Kitchen",
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
            <img
              src={image.mobileImg}
              alt={image.title}
              className="w-full h-auto object-cover"
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
