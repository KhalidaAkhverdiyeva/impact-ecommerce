"use client";
import { Header } from "@/components/Layout/Header/header";
import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";
import { blogPosts } from "@/mockdata/blogPost";
import ReadingNextSection from "@/components/Reading Next Section";
import CommentsSection from "@/components/Comments Section";
import ShareSection from "@/components/Share Section";

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const blogPost = blogPosts.find((post) => post.id === params.id);

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
            <ShareSection />
            
            {/* Reading Next Section */}
            <ReadingNextSection currentPostId={blogPost.id} />

            {/* Comments Section */}
            <CommentsSection postId={blogPost.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
