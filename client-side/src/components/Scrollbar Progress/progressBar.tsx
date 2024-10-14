import React from "react";

interface ScrollProgressBarProps {
  progress: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-200 h-2 z-50">
      <div className="bg-blue-600 h-2" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
