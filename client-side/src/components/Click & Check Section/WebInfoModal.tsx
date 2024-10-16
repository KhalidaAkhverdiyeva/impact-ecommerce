import { InfoModalProps } from "@/types/infoModalTypes";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const WebInfoModal: React.FC<InfoModalProps> = ({
  modalInfo,
  closeBottomDiv,
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
    <div className="absolute z-40" style={{ top: "30%", right: "40%" }}>
      <div ref={modalRef} className="flex flex-col items-center w-[380px]">
        <div className="bg-white bg-opacity-50 backdrop-blur-lg backdrop-saturate-150 p-[30px] relative w-full">
          <Image
            src={modalInfo.iconImg}
            alt={modalInfo.altImg}
            width={24}
            height={24}
          />
          <h4 className="font-[800] text-[20px] mt-[12px]">
            {modalInfo.title}
          </h4>
          <p className="mt-[14px] text-[16px]">{modalInfo.info}</p>
        </div>
      </div>
    </div>
  );
};

export default WebInfoModal;
