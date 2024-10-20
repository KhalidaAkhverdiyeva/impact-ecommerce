import React from "react";

const AllDesignersGridSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto py-[10px]">
      <div className="flex flex-col gap-[10px] lg:gap-6 px-[20px] md:px-[32px] lg:px-[48px]">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-[10px] lg:gap-6">
          {/* Big image on the left */}
          <div className="flex-1 w-[100%] md:w-[50%] relative">
            <video
              src="https://impact-theme-home.myshopify.com/cdn/shop/videos/c/vp/37431f2c575549909f4c610a76198286/37431f2c575549909f4c610a76198286.HD-1080p-2.5Mbps.mp4?v=0"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            ></video>
          </div>
          {/* Four images on the right */}
          <div className="flex-1 flex flex-col lg:gap-6 gap-[10px] w-[100%]">
            <div className="flex gap-[10px] lg:gap-6 flex-1 w-full">
              <div className="w-[50%] relative">
                <img
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen.jpg?v=1656420071&width=800"
                  alt="Image 1"
                  className="w-[100%] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Thomas Bentzen
                  </p>
                </div>
              </div>
              <div className="w-[50%] relative">
                <img
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik.jpg?v=1656420089&width=800"
                  alt="Image 2"
                  className="w-[100%] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Andreas Angesvik
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[10px] lg:gap-6 flex-1 w-full">
              <div className="flex-1 h-auto relative">
                <img
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/shane-schneck.jpg?v=1656420034&width=800"
                  alt="Image 3"
                  className="flex-1 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Shane Schneck
                  </p>
                </div>
              </div>
              <div className="flex-1 h-auto relative">
                <img
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/inga-sempe.jpg?v=1656420080&width=800"
                  alt="Image 4"
                  className="flex-1 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full  p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Inga Sempe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="flex flex-col md:flex-row gap-[10px] lg:gap-6 w-full">
          <div className="flex gap-[10px] lg:gap-6 w-full">
            <div className="relative w-1/2">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/muller-van-severen.jpg?v=1656420043&width=800"
                alt="Image 5"
                className="flex-1 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full  p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900] leading-[1]">
                  Muller Van Severen
                </p>{" "}
              </div>
            </div>
            <div className="relative w-1/2">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/jochen-holz.jpg?v=1656420054&width=800"
                alt="Image 6"
                className="flex-1 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full  p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                  Jochen Holz
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="flex gap-[10px] lg:gap-6 w-full">
            <div className="relative w-1/2">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/phanta_f2d28c38-1b9f-4106-b44d-c89bcb38aadd.jpg?v=1656420096&width=800"
                alt="Image 7"
                className="flex-1 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full  p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                  Phanta{" "}
                </p>{" "}
              </div>
            </div>
            <div className="relative w-1/2">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/wang-soderstrom.jpg?v=1656420062&width=800"
                alt="Image 8"
                className="flex-1 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full  p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900] leading-[1]">
                  Wang &amp; Söderström
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllDesignersGridSection;
