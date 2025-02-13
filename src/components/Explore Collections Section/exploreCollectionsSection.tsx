import React from "react";
import { LuChevronRight } from "react-icons/lu";
import CollectionCard from "./collectionCard";
import { Link } from "@/i18n/routing";

const ExploreCollectionsSections = () => {
  return (
    <div className="pt-[40px]">
      <div className=" flex flex-col gap-[40px] pb-[50px] mx-auto max-w-[1600px] ">
        <div className="px-[20px] md:px-[32px] lg:px-[48px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[16px]">
          <h3 className="text-[#272727] text-[32px] font-[800] md:text-[44px] lg:text-[50px]">
            Explore the collections
          </h3>

          <Link aria-label="View all collections" href="/collections">
            <div className="flex gap-[12px]">
              <p className="text-[14px] md:text-[16px] text-[#272727]">
                View all
              </p>
              <button
                aria-label="View all"
                className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center"
              >
                <LuChevronRight size={14} />
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className=" mx-auto max-w-[1600px]">
        <div className="flex gap-4 overflow-x-auto ">
          <CollectionCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreCollectionsSections;
