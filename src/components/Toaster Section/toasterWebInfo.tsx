import { InfoModalProps } from "@/types/infoModalTypes";
import React, { useRef, useEffect } from "react";

const ToasterWebInfo: React.FC<InfoModalProps> = ({
  modalInfo,
  closeBottomDiv,
  top = "0px",
  left = "0px",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeBottomDiv();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeBottomDiv]);

  if (!modalInfo) {
    return null;
  }

  return (
    <div
      className="z-40 absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
      aria-modal="true"
      role="dialog"
    >
      <div ref={modalRef} className="flex flex-col items-center w-[380px]">
        <div className="bg-[#D3E4F4] bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 p-[30px] relative w-full">
          <h4 className="font-bold text-[20px] mt-[12px]">{modalInfo.title}</h4>
          <p className="mt-[14px] text-[16px]">{modalInfo.info}</p>
        </div>
      </div>
    </div>
  );
};

export default ToasterWebInfo;
