"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const FooterLinks = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
    className="grid grid-cols-2 md:grid-cols-3 gap-[40px] lg:w-3/4 lg:gap-[60px]"
  >
    <ShopLinks />
    <DesignerLinks />
    <ImpactLinks />
  </motion.div>
);

const ShopLinks = () => (
  <motion.ul
    variants={containerVariants}
    className="text-[16px] flex flex-col gap-[12px]"
  >
    <motion.li
      variants={textVariants}
      className="font-[800] text-[18px] text-[#272727] mb-[4px]"
    >
      Shop
    </motion.li>
    {["Office", "Lighting", "Kitchen", "Decoration", "Books"].map((item) => (
      <motion.li
        variants={textVariants}
        key={item}
        className="text-[#797979] hover:underline cursor-pointer"
      >
        {item}
      </motion.li>
    ))}
  </motion.ul>
);

const DesignerLinks = () => (
  <motion.ul
    variants={containerVariants}
    className="text-[16px] flex flex-col gap-[12px]"
  >
    <motion.li
      variants={textVariants}
      className="font-[800] text-[18px] text-[#272727] mb-[4px]"
    >
      Designers
    </motion.li>
    {[
      { name: "George Sowden", path: "george-sowden" },
      { name: "Clara von Zweigbergk", path: "clara-von-zweigbergk" },
      { name: "Pierre Charpin", path: "pierre-charpin" },
      { name: "Thomas Bentzen", path: "thomas-bentzen" },
      { name: "View all", path: "/designers" },
    ].map(({ name, path }) => (
      <Link key={name} aria-label={name} href={path}>
        <motion.li
          variants={textVariants}
          className="text-[#797979] hover:underline cursor-pointer"
        >
          {name}
        </motion.li>
      </Link>
    ))}
  </motion.ul>
);

const ImpactLinks = () => (
  <motion.ul
    variants={containerVariants}
    className="text-[16px] flex flex-col gap-[12px]"
  >
    <motion.li
      variants={textVariants}
      className="font-[800] text-[18px] text-[#272727] mb-[4px]"
    >
      Impact
    </motion.li>
    {[
      { name: "About", path: "/about" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" },
    ].map(({ name, path }) => (
      <Link key={name} aria-label={name} href={path}>
        <motion.li
          variants={textVariants}
          className="text-[#797979] hover:underline cursor-pointer"
        >
          {name}
        </motion.li>
      </Link>
    ))}
  </motion.ul>
);
