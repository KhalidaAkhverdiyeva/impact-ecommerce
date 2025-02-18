import { Link } from "@/i18n/routing";

export const FooterLinks = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] lg:w-3/4 lg:gap-[60px]">
    <ShopLinks />
    <DesignerLinks />
    <ImpactLinks />
  </div>
);

const ShopLinks = () => (
  <ul className="text-[16px] flex flex-col gap-[12px]">
    <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">Shop</li>
    {["Office", "Lighting", "Kitchen", "Decoration", "Books"].map((item) => (
      <li key={item} className="text-[#797979] hover:underline cursor-pointer">
        {item}
      </li>
    ))}
  </ul>
);

const DesignerLinks = () => (
  <ul className="text-[16px] flex flex-col gap-[12px]">
    <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">
      Designers
    </li>
    {[
      { name: "George Sowden", path: "george-sowden" },
      { name: "Clara von Zweigbergk", path: "clara-von-zweigbergk" },
      { name: "Pierre Charpin", path: "pierre-charpin" },
      { name: "Thomas Bentzen", path: "thomas-bentzen" },
      { name: "View all", path: "/designers" },
    ].map(({ name, path }) => (
      <Link key={name} aria-label={name} href={path}>
        <li className="text-[#797979] hover:underline cursor-pointer">
          {name}
        </li>
      </Link>
    ))}
  </ul>
);

const ImpactLinks = () => (
  <ul className="text-[16px] flex flex-col gap-[12px]">
    <li className="font-[800] text-[18px] text-[#272727] mb-[4px]">Impact</li>
    {[
      { name: "About", path: "/about" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" },
    ].map(({ name, path }) => (
      <Link key={name} aria-label={name} href={path}>
        <li className="text-[#797979] hover:underline cursor-pointer">
          {name}
        </li>
      </Link>
    ))}
  </ul>
);
