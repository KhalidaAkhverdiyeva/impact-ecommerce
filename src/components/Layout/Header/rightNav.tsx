import { Link } from "@/i18n/routing";
import { IconButtons } from "./iconButtons";
import LanguageSelector from "./languageSelector";

interface RightNavProps {
  openSidebar: () => void;
  setIsAddCartOpen: (isOpen: boolean) => void;
}

export const RightNav = ({
  openSidebar,
  setIsAddCartOpen,
}: RightNavProps) => (
  <div className="flex-1 flex justify-end gap-[10px]">
    <div className="hidden md:flex gap-[10px] text-[18px] font-[700]">
      <Link href="/faq">FAQ</Link>
    </div>

    <div className="hidden md:block">
      <LanguageSelector />
    </div>
    <IconButtons
      openSidebar={openSidebar}
      setIsAddCartOpen={setIsAddCartOpen}
    />
  </div>
);
