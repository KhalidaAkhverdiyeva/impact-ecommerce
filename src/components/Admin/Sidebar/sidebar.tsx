"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { GoScreenFull } from "react-icons/go";
import { IoChatbubblesOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Inventory2 as ProductsIcon,
  Category as CategoryIcon,
  Article as BlogIcon,
  Store as WarehouseIcon,
  ExpandMore as ExpandMoreIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", margin: 0, padding: 0 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: "none",
          boxShadow: "none", // Prevents any bottom shadow
        }}
        open={open}
        className="border-none shadow-none"
      >
        <Toolbar className="bg-white border-none shadow-none flex justify-between p-0">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className="m-0 p-[20px]"
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon className="text-black" />
          </IconButton>

          {/* Search Bar */}
          <div className="flex-1 w-[100%] mx-4">
            <div className="flex items-center border rounded-full px-4 py-[10px]">
              <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none text-sm text-black w-full placeholder:text-sm"
              />
              <IoIosSearch className="text-black text-[20px] ml-2" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F2F7FB] p-[14px] rounded-full cursor-pointer">
              <HiOutlineMoon className="text-black text-[20px]" />
            </div>
            <div className="relative bg-[#F2F7FB] p-[14px] rounded-full cursor-pointer">
              <IoChatbubblesOutline className="text-black text-[20px]" />
              <span className="absolute flex justify-center items-center -top-[2px] -right-1 bg-red-600 text-white text-center text-[10px] w-[20px] h-[20px] rounded-full animate-bounce">
                3
              </span>
            </div>
            <div className="bg-[#F2F7FB] p-[14px] rounded-full cursor-pointer">
              <GoScreenFull className="text-black text-[20px]" />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 pr-[20px]">
              <Image
                src="/images/veryprettygirl.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
                width={200}
                height={200}
              />
              <div className="flex flex-col leading-tight text-sm text-black">
                <span className="text-[16px] font-[700] whitespace-nowrap">
                  Khali Akh
                </span>
                <span className="text-[12px] text-gray-500">Admin</span>
              </div>
            </div>
            <div className="px-[20px] py-[5px] border-l-[#a8a8a8] border-l-[1px] border-l-solid">
              <IoSettingsOutline
                className="text-black text-[24px] cursor-pointer"
                style={{ animation: "spin 4s linear infinite" }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            border: "none",
            boxShadow: "none", // Optional, just in case any shadow is applied
          },
        }}
      >
        <div className="flex items-center justify-between w-full p-4">
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=240"
            alt="Logo"
            className="h-[40px]"
            height={40}
            width={200}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>
          {/* General Section */}
          <ListItem
            sx={{
              display: "block",
              py: 1,
              px: 2.5,
              opacity: open ? 1 : 0,
              transition: "opacity 0.2s",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "text.secondary",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            >
              General
            </Typography>
          </ListItem>

          {/* Dashboard */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          {/* Accordion Items */}
          {[
            {
              label: "Products",
              icon: <ProductsIcon />,
              items: ["All Products", "Add New", "Inventory"],
            },
            {
              label: "Category",
              icon: <CategoryIcon />,
              items: ["All Categories", "Add Category"],
            },
            {
              label: "Blog Posts",
              icon: <BlogIcon />,
              items: ["All Posts", "New Post"],
            },
            {
              label: "Warehouse",
              icon: <WarehouseIcon />,
              items: ["Locations", "Stock", "Reports"],
            },
          ].map((menu, index) =>
            open ? (
              // When sidebar is open: show accordion
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={{ background: "transparent" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    px: 2.5,
                    minHeight: 48,
                    "& .MuiAccordionSummary-content": {
                      alignItems: "center",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText primary={menu.label} />
                </AccordionSummary>
                <AccordionDetails sx={{ pl: 7 }}>
                  {menu.items.map((subItem, i) => (
                    <ListItemButton key={i} sx={{ py: 0.5, px: 0 }}>
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : (
              // When sidebar is closed: show just the icon in a button
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}
