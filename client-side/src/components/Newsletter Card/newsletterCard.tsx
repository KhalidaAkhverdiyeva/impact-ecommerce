import React from "react";

const NewsletterCard = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col max-w-[1600px] mx-auto lg:flex-row md:px-[32px] lg:px-[48px] md:py-[50px]">
        <div className="flex-[75%] lg:flex-[40%] overflow-hidden cursor-pointer">
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/Arcs_Vase_red_Chim_Chim_Scent_Diffuser_light_beige_Tint_Wine_Glass_1.jpg?v=1656418824&width=1500"
            alt="sofa"
            className="w-[100%] h-[100%] transition-transform duration-500 ease-in-out hover:scale-105 object-cover"
          />
        </div>

        <div className="flex-[40%] bg-[#A7D3DD] text-[#272727] flex flex-col gap-[24px] p-[20px] md:p-[48px]">
          <div className="">
            <svg
              role="presentation"
              fill="none"
              focusable="false"
              stroke-width="2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.994 12a4.946 4.946 0 1 1-9.89 0 4.946 4.946 0 0 1 9.891 0v0h-.001Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16.994 12v2.143c0 5.753 9.017.329 4.285-7.483a10.864 10.864 0 0 0-9.312-5.374 10.715 10.715 0 1 0 4.154 20.605"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>

          <h2 className="text-[36px] md:text-[44px] lg:text-[48px]  font-[800] leading-[1.1] cursor-pointer">
            Sign up to the newsletter.
          </h2>
          <p className="text-[14px] md:text-[18px] ">
            Subscribe to get notified about new stories, news and personal
            offers.
          </p>
          <div className="flex flex-col md:flex-row gap-[20px]">
            <div
              className="flex justify-between border p-[14px] md:w-[70%] lg:w-[50%]"
              style={{
                color: "rgba(39,39,39,0.12)",
                borderColor: "rgba(39, 39, 39, 0.12)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent placeholder:text-[16px] placeholder:font-[300] placeholder:text-[#373636] flex-grow outline-none"
                style={{
                  color: "rgba(39,39,39,0.12)",
                }}
              />
            </div>
            <div className="bg-[#272727] py-[16px] px-[32px] text-center flex justify-center items-center gap-[10px] md:w-[30%]  lg:w-[50%]">
              <svg
                role="presentation"
                fill="none"
                focusable="false"
                stroke-width="2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1.77 18.063a3.586 3.586 0 0 0 3.174 3.11c2.278.24 4.637.49 7.056.49 2.417 0 4.778-.252 7.056-.49a3.584 3.584 0 0 0 3.175-3.11c.243-1.96.483-3.987.483-6.063 0-2.074-.24-4.102-.483-6.063a3.586 3.586 0 0 0-3.175-3.112c-2.278-.236-4.639-.487-7.056-.487s-4.778.252-7.056.49a3.583 3.583 0 0 0-3.175 3.11c-.243 1.96-.483 3.988-.483 6.062 0 2.074.24 4.102.483 6.063Z"
                  fill="white"
                  fill-opacity=".12"
                  stroke="white"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="m1.817 5.493 8.06 6.356a3.428 3.428 0 0 0 4.245 0l8.06-6.356"
                  stroke="white"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <button className="text-white font-[700]">Subscribe</button>
            </div>
          </div>
          <p className="text-[12px] text-[#272727B3] pt-[20px]">
            By completing this form you are signing up to receive our emails.
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCard;
