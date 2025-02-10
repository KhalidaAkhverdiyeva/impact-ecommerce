import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(() => ({
  padding: 8,
  "& .MuiSwitch-track": {
    backgroundColor: "#DFDFDF",
    borderRadius: 16,
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "white",
    width: 20,
    height: 20,
  },
  "&.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: "#007aff", // Customize the color when checked
  },
  "&.Mui-checked .MuiSwitch-track": {
    backgroundColor: "#272727", // Customize track color when checked
  },
}));

export default CustomSwitch;
