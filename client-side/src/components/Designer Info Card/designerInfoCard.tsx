import React from "react";

const DesignerInfoCard = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-[50px]">
      <div className=" flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px]  lg:px-[48px] ">
        <div className="flex gap-[20px] lg:w-[55%]">
          <div className="w-[40%]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-02.jpg?v=1659104239&width=1000"
              alt=""
            />
          </div>
          <div className="pt-[40px] w-[60%]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-03.jpg?v=1659104228&width=1000"
              alt=""
            />
          </div>
        </div>
        <div className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]">
          <p className="font-[900] ">Designer</p>
          <h2 className="text-[40px] font-[900] lg:text-[60px]">
            Thomas Bentzen
          </h2>
          <p className="text-center lg:text-left pt-[20px] max-w-[600px]">
            Thomas Bentzen is a Danish designer who founded his own studio in
            Copenhagen in 2010. Previously, he was a partner at Studio Louise
            Campbell, where he worked for five years. He is a board member of
            the Danish Cabinetmakers Autumn Exhibition (SE) and an occasional
            teacher at the Royal Danish Academy of Fine Arts, School of Design.
            Bentzen is a methodical designer, who seeks to create fine-tuned
            products that are both engaging and durable. He works in the classic
            tradition of Scandinavian design – with a pragmatic, unassuming and
            universal outlook. Against this backdrop, he has shown a talent for
            creating designs that are imbued with a contemporary feel that spark
            a sense of joy too. For HAY, Bentzen has designed the DLM Table and
            Shade Bin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignerInfoCard;
