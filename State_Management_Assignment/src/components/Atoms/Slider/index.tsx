import * as React from "react";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import myTheme from "../../../Theme";
const theme = createTheme({
  palette: {
    primary: {
      main: myTheme.palette.primary.dark,
    },
  },
});

interface Props {
  value: number;
  onHandleChange: (event: Event, newValue: number | number[]) => void;
  maxValue: number;
}

const sliderSx = {
  height: 10,
  color: "primary.main",
  "& .MuiSlider-thumb": {
    borderRadius: "5px",
    boxShadow: "0px 0px 0px 3px #9575cd",
    "&:hover": {
      boxShadow: "0px 0px 0px 6px #9575cd",
    },
    "& .MuiSlider-track, & .MuiSlider-thumb:hover": {
      boxShadow: "0px 0px 0px 3px #9575cd",
    },
  },
};

const RateSlider = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Slider
        value={props.value}
        onChange={props.onHandleChange}
        min={0}
        max={props.maxValue}
        sx={sliderSx}
      />
    </ThemeProvider>
  );
};

export default RateSlider;
