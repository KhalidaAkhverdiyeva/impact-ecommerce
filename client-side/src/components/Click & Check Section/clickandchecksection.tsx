"use client";
import React, { useState } from "react";
import { ModalInfo } from "@/types/infoModalTypes";
import InfoModal from "./InfoModal";
import PlusButtons from "./PlusButtons";
import TextContent from "./TextContent";
import { images } from "@/static/ImagesData";

const ClickandCheckSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  const toggleBottomDiv = (info: ModalInfo) => {
    setModalInfo(info);
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      closeBottomDiv();
    }
  };

  const closeBottomDiv = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  return (
    <div className="py-[50px]">
      <div className="relative">
        <TextContent />
        <div className="relative">
          {images.map((image) => (
            <picture key={image.srcSet} className="w-full">
              <source media="(min-width: 640px)" srcSet={image.tabletSrc} />
              <source media="(min-width: 1024px)" srcSet={image.srcSet} />
              <img
                src={image.mobileSrc}
                alt="lamp img"
                className="w-full h-full object-cover"
              />
            </picture>
          ))}

          <PlusButtons toggleBottomDiv={toggleBottomDiv} />
        </div>
      </div>
      {isOpen && (
        <InfoModal
          closeBottomDiv={closeBottomDiv}
          isClosing={isClosing}
          modalInfo={modalInfo}
        />
      )}
    </div>
  );
};

export default ClickandCheckSection;
