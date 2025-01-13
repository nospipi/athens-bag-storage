"use client";

import Button from "@mui/material/Button";
import { TbMapShare } from "react-icons/tb";

//----------------------------------------------------------

const NavigateButton = () => {
  return (
    <Button
      endIcon={<TbMapShare />}
      className="self-start"
      variant="contained"
      onClick={() => {
        window.open(
          "https://www.google.com/maps/place/37.985727121782325,23.71909543003348",
          "_blank"
        );
      }}
    >
      Navigate
    </Button>
  );
};

export default NavigateButton;
