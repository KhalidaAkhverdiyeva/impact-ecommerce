import { blogPosts } from "@/mockdata/blogPost";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogCard from "../Blog Card/blogCard";

interface ReadingNextSectionProps {
  currentPostId: string;
}

const ReadingNextSection: React.FC<ReadingNextSectionProps> = ({
  currentPostId,
}) => {
  return (
    <div>
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-[24px] flex items-center gap-[20px] md:text-[32px] font-[800] text-[#272727] mb-[40px]">
          <FaArrowRightLong />
          Reading Next
        </h2>
        <div className="gap-[40px] grid grid-cols-1 md:grid-cols-2">
          {blogPosts
            .filter((post) => post.id !== currentPostId)
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
  );
};

export default ReadingNextSection;
