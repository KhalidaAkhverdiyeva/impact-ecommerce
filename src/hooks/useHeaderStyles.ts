export const useHeaderStyles = ({
  transparent,
  isSticky,
  openDropdown,
}: {
  transparent: boolean;
  isSticky: boolean;
  openDropdown: boolean;
}) => {
  const headerClass = `
    fixed w-full z-50 transition-all duration-300
    ${transparent && !isSticky && !openDropdown ? 'bg-transparent' : 'bg-white'}
    ${isSticky ? 'shadow-md' : ''}
  `;

  return { headerClass };
};
