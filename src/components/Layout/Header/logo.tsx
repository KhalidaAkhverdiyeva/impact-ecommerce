import Image from "next/image";
import { Link } from "@/i18n/routing";

interface LogoProps {
  transparent: boolean;
  isSticky: boolean;
  openDropdown: boolean;
}

export const Logo = ({ transparent, isSticky, openDropdown }: LogoProps) => (
  <div className="flex-1 flex justify-center">
    <Link aria-label="Logo" href="/">
      <Image
        src={
          !transparent || isSticky || openDropdown
            ? "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=240"
            : "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240"
        }
        alt="logo"
        width={120}
        height={26}
        className="logo cursor-pointer"
      />
    </Link>
  </div>
);
