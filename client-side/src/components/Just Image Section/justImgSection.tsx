import React from "react";

const JustImgSection = () => {
  return (
    <section className="bg-white py-[50px] ">
      <picture className="w-full">
        <source
          media="(min-width: 640px)"
          srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05.jpg?v=1653311262&width=2000"
        />
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05_mobile_715d0c91-0660-4a0a-bd19-e830511d6828.jpg?v=1663056832&width=800"
          alt="lamp img"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  );
};

export default JustImgSection;
