import React from "react";

interface FloatingTextSectionProps {
  text: string;
  color?: string;
}

const FloatingTextSection: React.FC<FloatingTextSectionProps> = ({
  text,
  color,
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-[20px] bg-white">
      <div
        className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900] "
        style={{ color }}
      >
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
      <div
        className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900]"
        style={{ color }}
      >
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
      <div
        className="inline-block animate-marquee whitespace-nowrap text-[80px] md:text-[150px] font-[900] "
        style={{ color }}
      >
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
    </div>
  );
};

export default FloatingTextSection;
