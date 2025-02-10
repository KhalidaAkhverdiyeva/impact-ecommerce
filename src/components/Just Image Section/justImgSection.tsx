import React from "react";

const JustImgSection = () => {
  return (
    <section className="bg-white py-[50px] ">
      <picture className="w-full">
        <source
          media="(min-width: 640px)"
          srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_Sowden_Toaster.jpg?v=1656321120&width=3200"
        />
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_Sowden_Toaster_mobile.jpg?v=1656322735&width=800"
          alt="lamp img"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  );
};

export default JustImgSection;
