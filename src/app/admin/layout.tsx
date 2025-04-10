import { ReactNode } from "react";
import { Box } from "@mui/material";
import MiniDrawer from "@/components/Admin/Sidebar/sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          marginTop: "64px", // Add margin to account for the AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
