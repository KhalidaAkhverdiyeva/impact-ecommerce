import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@/i18n/routing";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuDrawer = ({ isOpen, onClose }: MobileMenuDrawerProps) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: {
            xs: "100%",
            sm: "300px",
          },
          height: "100%",
        },
      }}
    >
      <Box sx={{ p: { xs: 3, sm: 4 } }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mt: 6 }}>
          <ul className="flex flex-col gap-6 text-[24px] font-bold">
            <li onClick={onClose}>
              <Link href="/shop">Shop</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/designers">Designers</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/blog">Blog</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/features">Features</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[px] text-[24px] font-bold pt-[10px]">
            <li onClick={onClose} className="text-[16px]">
              <Link href="/faq">FAQ</Link>
            </li>
            <li onClick={onClose} className="text-[16px]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;
