"use client";
import { Alert, Slide, Snackbar } from "@mui/material";

interface SuccessAlertProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({
  open,
  onClose,
  message,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={Slide}
    >
      <Alert
        onClose={onClose}
        severity="success"
        sx={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#708A5C",
          color: "white",
          ".MuiAlert-icon": {
            color: "white",
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessAlert;
