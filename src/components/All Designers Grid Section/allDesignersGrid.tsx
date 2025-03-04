import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";

const AllDesignersGridSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto py-[10px]">
      <div className="flex flex-col gap-[10px] lg:gap-6 px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col md:flex-row gap-[10px] lg:gap-6">
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
          <div className="flex-1 flex flex-col lg:gap-6 gap-[10px] w-[100%]">
            <div className="flex gap-[10px] lg:gap-6 flex-1 w-full">
              <Link
                aria-label="Thomas Bentzen"
                href="/thomas-bentzen"
                className="w-[50%] relative cursor-pointer overflow-hidden "
              >
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen.jpg?v=1656420071&width=800"
                  alt="Thomas Bentzen"
                  fill
                  className="object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Thomas Bentzen
                  </p>
                </div>
              </Link>
              <Link
                aria-label="Andreas Angesvik"
                href="/andreas-engesvik"
                className="w-[50%] relative cursor-pointer overflow-hidden"
              >
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik.jpg?v=1656420089&width=800"
                  alt="Image 2"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Andreas Angesvik
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex gap-[10px] lg:gap-6 flex-1 w-full">
              <Link
                aria-label="Shane Schneck"
                href="/shane-schneck"
                className="flex-1 h-auto relative cursor-pointer overflow-hidden"
              >
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/shane-schneck.jpg?v=1656420034&width=800"
                  alt="Image 3"
                  width={800}
                  height={600}
                  className="flex-1 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Shane Schneck
                  </p>
                </div>
              </Link>

              <Link
                aria-label="Inga Sempe"
                href="inga-sempe"
                className="flex-1 h-auto relative cursor-pointer overflow-hidden"
              >
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/inga-sempe.jpg?v=1656420080&width=800"
                  alt="Image 4"
                  width={800}
                  height={600}
                  className="flex-1 object-cover transform transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 w-full p-4">
                  <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                    Inga Sempe
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[10px] lg:gap-6 w-full">
          <div className="flex gap-[10px] lg:gap-6 w-full">
            <Link
              aria-label="Muller Van Severen"
              href="muller-van-severen"
              className="relative w-1/2 cursor-pointer overflow-hidden"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/muller-van-severen.jpg?v=1656420043&width=800"
                alt="Image 5"
                width={800}
                height={600}
                className="flex-1 w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900] leading-[1]">
                  Muller Van Severen
                </p>
              </div>
            </Link>

            <Link
              aria-label="Jochen Holz"
              href="jochen-holz"
              className="relative w-1/2 cursor-pointer overflow-hidden"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/jochen-holz.jpg?v=1656420054&width=800"
                alt="Image 6"
                width={800}
                height={600}
                className="flex-1 w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                  Jochen Holz
                </p>
              </div>
            </Link>
          </div>

          <div className="flex gap-[10px] lg:gap-6 w-full">
            <Link
              aria-label="Phanta"
              href="phanta"
              className="relative w-1/2 cursor-pointer overflow-hidden"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/phanta_f2d28c38-1b9f-4106-b44d-c89bcb38aadd.jpg?v=1656420096&width=800"
                alt="Image 7"
                width={800}
                height={600}
                className="flex-1 w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900]">
                  Phanta
                </p>
              </div>
            </Link>

            <Link
              aria-label="Wang & Söderström"
              href="wang-soderstrom"
              className="relative w-1/2 cursor-pointer overflow-hidden"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/wang-soderstrom.jpg?v=1656420062&width=800"
                alt="Image 8"
                width={800}
                height={600}
                className="flex-1 w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-white text-[18px] lg:text-[26px] font-[900] leading-[1]">
                  Wang &amp; Söderström
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllDesignersGridSection;
