import { Drawer, Box, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import LanguageSelector from "./languageSelector";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuDrawer = ({ isOpen, onClose }: MobileMenuDrawerProps) => {
  const [designersOpen, setDesignersOpen] = useState(false);

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
          padding: "45px 0px",
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
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDesignersOpen(!designersOpen)}
              >
                <span>Designers</span>
                {designersOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <Collapse in={designersOpen}>
                <ul className="ml-4 mt-4 text-[18px] flex flex-col gap-4">
                  <li onClick={onClose}>
                    <Link href="/sowden-collection">Sowden</Link>
                  </li>
                  <li onClick={onClose}>
                    <Link href="/andreas-engesvik">Andreas Engesvik</Link>
                  </li>
                  <li onClick={onClose}>
                    <Link href="/thomas-bentzen">Thomas Bentzen</Link>
                  </li>
                  <li onClick={onClose}>
                    <Link href="/collections">Collections</Link>
                  </li>
                  <li onClick={onClose}>
                    <Link href="/designers">All Designers</Link>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li onClick={onClose}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/blog">Blog</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/faq">FAQ</Link>
            </li>
            <li onClick={onClose}>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;
