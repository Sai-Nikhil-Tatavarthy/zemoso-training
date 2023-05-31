import React from "react";
import { Typography } from "@mui/material";
import myTheme from "../../../Theme";
import { ThemeProvider } from "@emotion/react";
interface Props {
  text: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
}

const TextBox = (props: Props) => {
  return (
    <ThemeProvider theme={myTheme}>
      <Typography variant={props.variant}>{props.text}</Typography>
    </ThemeProvider>
  );
};

export default TextBox;
