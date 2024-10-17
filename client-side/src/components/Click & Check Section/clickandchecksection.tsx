"use client";
import React, { useState } from "react";
import { ModalInfo } from "@/types/infoModalTypes";
import InfoModal from "./InfoModal";
import WebInfoModal from "./WebInfoModal";
import PlusButtons from "./PlusButtons";
import TextContent from "./TextContent";
import { images } from "@/static/ImagesData";

const ClickandCheckSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);
  const [isWebModal, setIsWebModal] = useState(false);
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");

  const toggleBottomDiv = (info: ModalInfo, buttonId: string) => {
    setModalInfo(info);
    setIsOpen((prev) => !prev);

    const isSmallScreen = window.innerWidth < 1024;
    setIsWebModal(!isSmallScreen);

    if (buttonId === "button1") {
      setTop("25%");
      setLeft("65%");
    } else if (buttonId === "button2") {
      setTop("50%");
      setLeft("38%");
    }

    if (!isOpen) {
      if (isSmallScreen) {
        document.body.style.overflow = "hidden";
      }
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
          {isOpen && (
            <>
              {isWebModal ? (
                <WebInfoModal
                  closeBottomDiv={closeBottomDiv}
                  isClosing={isClosing}
                  modalInfo={modalInfo}
                  top={top}
                  left={left}
                />
              ) : (
                <InfoModal
                  closeBottomDiv={closeBottomDiv}
                  isClosing={isClosing}
                  modalInfo={modalInfo}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClickandCheckSection;
