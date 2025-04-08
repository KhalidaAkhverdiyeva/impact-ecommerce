import React from "react";
import { usePathname } from "next/navigation";

const ShareSection = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-[750px] w-[100%] text-center border-t border-[#e0dede] pt-[40px]">
      <div className="flex items-center gap-[20px]">
        <span className="text-[18px] font-[700] text-[#272727]">Share</span>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z" />
            </svg>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              'Check out this article'
            )}&body=${encodeURIComponent(`https://yourdomain.com${pathname}`)}`}
            className="text-[#272727] hover:text-[#0078d4] transition-colors"
            aria-label="Share via Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
