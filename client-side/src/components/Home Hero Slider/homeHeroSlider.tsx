import React from "react";

const HomeHeroSlider = () => {
  return (
    <div
      className="flex justify-center w-[100%] overflow-hidden"
      style={{ height: "calc(100svh - 39px)" }}
    >
      <picture className="w-[100%]">
        {/* Source for screens larger than 690px */}
        <source
          media="(min-width: 690px)"
          srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_cb7f484e-59a1-46ee-8c0b-8aa9b9971738.jpg?v=1657547898&width=2800"
        />
        {/* Fallback image for screens smaller than 690px */}
        <img
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_mobile.jpg?v=1656590750&width=800"
          alt="home decor"
          className="w-[100%] h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default HomeHeroSlider;
