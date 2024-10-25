import React from "react";

const CollectionCard = () => {
  return (
    <section className="max-w-[1600px] mx-auto pb-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="flex gap-[20px] md:gap-[70px] overflow-x-auto scrollbar-hide">
        <div className="flex-shrink-0 lg:flex-1 w-[75%] md:w-[60%]  bg-white text-[#272727]">
          <div className="overflow-hidden mb-4 text-[#272727]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yellow_Sowden_Toaster_grey_Ellipse_Tray_S_dark_green.jpg?v=1660122858&width=600"
              alt="Decoration"
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-[800] mb-2">
            Decoration
          </h2>
          <p className=" mb-4">
            For a living room refresh that adds color, texture, and
            functionality, take a look at some of our latest styles and
            collaborations.
          </p>
          <a href="#" className=" underline">
            Shop Decoration
          </a>
        </div>
        <div className="flex-shrink-0 lg:flex-1 w-[75%]  md:w-[60%]  bg-white text-[#272727]">
          <div className="overflow-hidden mb-4 text-[#272727]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yellow_Sowden_Toaster_grey_Ellipse_Tray_S_dark_green.jpg?v=1660122858&width=600"
              alt="Decoration"
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-[32px]  lg:text-[48px] font-[800] mb-2">
            Decoration
          </h2>
          <p className=" mb-4">
            For a living room refresh that adds color, texture, and
            functionality, take a look at some of our latest styles and
            collaborations.
          </p>
          <a href="#" className=" underline">
            Shop Decoration
          </a>
        </div>
        <div className="flex-shrink-0 lg:flex-1 w-[75%] md:w-[60%]  bg-white text-[#272727]">
          <div className="overflow-hidden mb-4 text-[#272727]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yellow_Sowden_Toaster_grey_Ellipse_Tray_S_dark_green.jpg?v=1660122858&width=600"
              alt="Decoration"
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-[800] mb-2">
            Decoration
          </h2>
          <p className=" mb-4">
            For a living room refresh that adds color, texture, and
            functionality, take a look at some of our latest styles and
            collaborations.
          </p>
          <a href="#" className=" underline">
            Shop Decoration
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionCard;
