import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Comment {
  id: number;
  name: string;
  date: string;
  text: string;
}

interface CommentsSectionProps {
  postId: string;
}

const CommentsSection: React.FC<CommentsSectionProps> = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      id: Date.now(),
      name: formData.name,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      text: formData.comment,
    };

    setComments((prev: Comment[]) => [...prev, newComment]);
    setFormData({ name: "", email: "", comment: "" });
  };
  return (
    <div className="max-w-[750px] mx-auto border-t border-[#e0dede] pt-[50px]">
      <h2 className="text-[24px] flex items-center gap-[20px] md:text-[32px] font-[800] text-[#272727] mb-[40px]">
        <FaArrowRightLong />
        Comments ({comments.length})
      </h2>

      {/* Previous Comments */}
      {comments.length > 0 && (
        <div className="flex flex-col gap-[30px] mb-[50px]">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[15px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#272727] flex items-center justify-center text-white font-[600] text-[16px]">
                  {comment.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[700] text-[#272727]">
                    {comment.name}
                  </span>
                  <span className="text-[12px] text-gray-500">
                    {comment.date}
                  </span>
                </div>
              </div>
              <p className="text-[14px] text-[#272727] pl-[60px]">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Leave a Comment Form */}
      <h3 className="text-[20px] font-[700] text-[#272727] mb-[30px]">
        Leave a Comment
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="name"
              className="text-[14px] font-[600] text-[#272727]"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="border border-[#e0dede] rounded-[4px] p-[12px] text-[14px] focus:outline-none focus:border-[#B4875D]"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="email"
              className="text-[14px] font-[600] text-[#272727]"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="border border-[#e0dede] rounded-[4px] p-[12px] text-[14px] focus:outline-none focus:border-[#B4875D]"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="comment"
            className="text-[14px] font-[600] text-[#272727]"
          >
            Comment *
          </label>
          <textarea
            id="comment"
            name="comment"
            required
            value={formData.comment}
            onChange={handleInputChange}
            rows={6}
            className="border border-[#e0dede] rounded-[4px] p-[12px] text-[14px] focus:outline-none focus:border-[#B4875D] resize-none"
            placeholder="Write your comment here..."
          />
        </div>
        <button
          type="submit"
          className="bg-[#272727] text-white py-[12px] px-[24px] rounded-[4px] font-[600] text-[14px] hover:bg-[#9a6f4a] transition-colors duration-300 w-fit"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
