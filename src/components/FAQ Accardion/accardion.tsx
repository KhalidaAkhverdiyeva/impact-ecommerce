"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";

interface AccordionProps {
  title: string;
  content: string;
  isLast?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative border-t border-[#E6E6E6] ${isLast ? "" : ""}`}>
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-[20px] px-[20px] md:px-[32px]"
      >
        <span className="text-left text-[16px] font-[700] text-[#272727]">
          {title}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <LuChevronDown size={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
            style={{ transformOrigin: "top" }}
          >
            <div className="px-[20px] md:px-[32px] pb-[20px] text-[14px] md:text-[16px] text-[#272727B3]">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
