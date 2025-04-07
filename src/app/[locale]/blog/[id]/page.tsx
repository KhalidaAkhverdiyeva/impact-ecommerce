"use client";
import { Header } from "@/components/Layout/Header/header";
import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";
import { blogPosts } from "@/mockdata/blogPost";
import { usePathname } from "next/navigation";
import BlogCard from "@/components/Blog Card/blogCard";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const blogPost = blogPosts.find((post) => post.id === params.id);
  const pathname = usePathname();

  if (!blogPost) {
    return (
      <div className="bg-[#B4875D] min-h-screen">
        <Header transparent={true} />
        <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] py-[50px] text-center">
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-[800]">
            Blog post not found
          </h1>
          <Link
            href="/blog"
            aria-label="Back to blog"
            className="text-[18px] font-[700] text-[#272727] hover:underline mt-4 inline-block"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        style={{ backgroundColor: blogPost.backgroundColor }}
        className="relative h-[550px] mb-[100px]"
      >
        <Header transparent={true} />
        <div className="max-w-[1600px] pt-[100px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
          <div className="flex flex-col lg:flex-row gap-[40px]">
            {/* Left Column - Main Image */}
            <div className="lg:w-[50%]">
              <div className="relative h-[300px] md:h-[400px] lg:h-[550px]">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Title and Info */}
            <div className="lg:w-[50%] flex flex-col gap-[20px]">
              <button
                aria-label={blogPost.category}
                className="text-[16px] font-[700] text-white bg-[#272727] bg-opacity-15 py-[6px] px-[20px] w-fit"
              >
                {blogPost.category}
              </button>
              <h1 className="text-[32px] text-white md:text-[44px] lg:text-[56px] font-[800] leading-[1.1]">
                {blogPost.title}
              </h1>
              <div className="flex gap-[12px] md:text-[14px] items-center">
                <div className="flex gap-[10px] text-white">
                  <svg
                    role="presentation"
                    fill="none"
                    focusable="false"
                    strokeWidth="1.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.372 1v2.877M10.455 1v2.877"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M14.338 7.632H1.497l.179-4.57 6.164-.448 6.497.448v4.57Z"
                      fill="currentColor"
                      fillOpacity=".12"
                    ></path>
                    <path
                      d="M1.224 12.073c.183 1.631 1.508 2.925 3.147 3.004a73.18 73.18 0 0 0 3.546.083c1.256 0 2.413-.028 3.546-.083 1.639-.079 2.964-1.374 3.146-3.004.124-1.099.225-2.224.225-3.37 0-1.147-.102-2.273-.225-3.371-.182-1.631-1.507-2.925-3.146-3.004a73.22 73.22 0 0 0-3.546-.083 73.22 73.22 0 0 0-3.546.083c-1.639.079-2.964 1.374-3.147 3.004C1.101 6.43 1 7.556 1 8.703c0 1.146.102 2.272.224 3.37ZM1.331 7.202h13.24"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <div className="text-[12px] text-white md:text-[14px]">
                    {blogPost.date}
                  </div>
                </div>
                <div className="flex gap-[10px] text-white">
                  <svg
                    role="presentation"
                    fill="none"
                    focusable="false"
                    strokeWidth="1.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.602 1.881A6.961 6.961 0 1 1 5.6 14.318l-3.806.633a.57.57 0 0 1-.635-.745l.974-2.904a6.961 6.961 0 0 1 2.47-9.42Z"
                      fill="currentColor"
                      fillOpacity=".12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.5 6.286h5.572M5.5 9.714h4.214"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div className="text-[12px] text-white md:text-[14px]">
                    {blogPost.comments}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-white flex-grow">
        <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] py-[50px]">
          <div className="flex flex-col gap-[40px] items-center">
            {/* Content Section */}
            <div className="max-w-[750px] text-center">
              {Array.isArray(blogPost.content) ? (
                blogPost.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <div key={index} className="mb-8">
                        <p
                          className={`text-left leading-[1.4] text-[#272727] whitespace-pre-line ${
                            item.isBold
                              ? "text-[20px] md:text-[20px] lg:text-[24px] font-[700]"
                              : "text-[14px] md:text-[14px] lg:text-[16px] font-[400]"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    );
                  } else if (item.type === "image" && item.url) {
                    return (
                      <div key={index} className="w-full max-w-[750px] mb-8">
                        <div className="relative h-[400px] md:h-[500px] mb-2">
                          <Image
                            src={item.url}
                            alt={`${blogPost.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[12px] text-gray-500 text-left">
                          {item.caption ||
                            `Image ${index + 1} from ${blogPost.title}`}
                        </p>
                      </div>
                    );
                  } else if (item.type === "quote") {
                    return (
                      <div key={index} className="w-full max-w-[750px] mb-8">
                        <blockquote className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#272727] leading-[1.3] italic relative ">
                          <span className="absolute left-[-20px] top-0 text-[48px] md:text-[56px] lg:text-[64px] text-[#272727]">
                            &ldquo;
                          </span>
                          {item.text}
                          <span className="absolute right-[-10px] bottom-0 text-[48px] md:text-[56px] lg:text-[64px] text-[#272727]">
                            &rdquo;
                          </span>
                        </blockquote>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                <p className="text-[16px] text-left md:text-[18px] lg:text-[22px] font-[700] leading-[1.4] text-[#272727] whitespace-pre-line">
                  {blogPost.content}
                </p>
              )}
            </div>

            {/* Share Section */}
            <div className="max-w-[750px] w-[100%] text-center border-t border-[#e0dede] pt-[40px]">
              <div className="flex items-center gap-[20px]">
                <span className="text-[18px] font-[700] text-[#272727]">
                  Share
                </span>
                <div className="flex gap-[20px]">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://yourdomain.com${pathname}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272727] hover:text-[#3b5998] transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://yourdomain.com${pathname}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272727] hover:text-[#1da1f2] transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                    </svg>
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      `https://yourdomain.com${pathname}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#272727] hover:text-[#e60023] transition-colors"
                    aria-label="Share on Pinterest"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(
                      blogPost.title
                    )}&body=${encodeURIComponent(
                      `https://yourdomain.com${pathname}`
                    )}`}
                    className="text-[#272727] hover:text-[#0078d4] transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Reading Next Section */}
            <div className="max-w-[750px] mx-auto">
              <h2 className="text-[24px] flex items-center gap-[20px] md:text-[32px] font-[800] text-[#272727] mb-[40px]">
                <FaArrowRightLong />
                Reading Next
              </h2>
              <div className="gap-[40px] grid grid-cols-1 md:grid-cols-2">
                {blogPosts
                  .filter((post) => post.id !== blogPost.id)
                  .slice(0, 2)
                  .map((post) => (
                    <BlogCard
                      key={post.id}
                      imgSrc={post.image}
                      id={post.id}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      comments={post.comments}
                      variant="detail"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
