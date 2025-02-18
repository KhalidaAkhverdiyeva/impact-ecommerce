interface HeaderStylesProps {
  transparent: boolean;
  isSticky: boolean;
  openDropdown: string | null;
}

export const useHeaderStyles = ({
  transparent,
  isSticky,
  openDropdown,
}: HeaderStylesProps) => {
  const baseClass = transparent
    ? "absolute top-0 left-0 z-[70] w-full bg-transparent text-white"
    : "z-[70] w-full bg-white text-black";

  const stickyClass = isSticky
    ? "fixed top-0 left-0 w-full bg-white text-black shadow-md z-[70]"
    : "";

  const dropdownBaseClass = transparent
    ? "sticky top-0 left-0 z-[70] w-full bg-white text-black additional-dropdown-styles"
    : "sticky top-0 z-[70] w-full bg-white text-black";

  const dropdownClass = openDropdown ? dropdownBaseClass : "";

  const headerClass = `${
    openDropdown ? dropdownClass : isSticky ? stickyClass : baseClass
  } flex justify-center transition-all duration-300`;

  return { headerClass };
};
