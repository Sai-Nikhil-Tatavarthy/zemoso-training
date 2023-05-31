import myTheme from "../../../Theme";
import { makeStyles, createStyles } from "@material-ui/core";
export const submitBtnSx = {
  bgcolor: myTheme.palette.primary.dark,
  padding: "20px 60px",
  FontFace: myTheme.typography.fontFamily,
  borderRadius: "15px",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  color: myTheme.palette.info.light,
};

export const resetBtnSx = {
  padding: "7px",
  color: myTheme.palette.info.light,
  backgroundColor: myTheme.palette.success.light,
  borderRadius: "8px",
};
export const useStyles = makeStyles((theme) =>
  createStyles({
    summary_div: {
      paddingLeft: "25px",
    },
    summary_heading: {
      color: myTheme.palette.info.light,
      width: "fit-content",
      fontFamily: myTheme.typography.fontFamily,
      display: "flex",
      alignItems: "center",
      margin: "20px 10px",
    },
    summary_content: {
      color: myTheme.palette.info.main,
    },

    summary_text: {
      marginRight: "5px",
    },

    flex_display: {
      display: "flex",
      flexDirection: "column",
    },

    item_desc: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    typography: {
      fontWeight: 600,
      size: "20px",
      width: "90%",
      marginTop: "12px",
      fontFamily: myTheme.typography.fontFamily,
    },

    select_value: {
      width: "99%",
    },

    reset_btn: {
      borderRadius: "20px",
      backgroundColor: myTheme.palette.primary.main,
      padding: "7px",
    },
    seperation_line: {
      border: `0.5px solid ${myTheme.palette.info.light}`,
      width: "95%",
      marginTop: "20px",
      marginBottom: "10px",
      marginRight: "10px",
    },

    review_btn: {},

    term_select: {},
    slider_section: {},
    slide_reset: {},
    slider_div: {},
    payback_rate: {},
    total_payable: {},
  })
);
