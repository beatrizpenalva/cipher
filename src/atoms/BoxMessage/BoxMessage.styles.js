import { tokens } from "../../style.js";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  label: {
    display: "flex",
    flexDirection: "column",
    paddingTop: ".625rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    font: tokens.h2,
    color: tokens.grayDarker,
  },

  textArea: {
    padding: "0.5rem",
    font: tokens.p,
    color: tokens.grayDarker,
    backgroundColor: tokens.black_10,
    border: "none",
    borderBottom: `2px solid ${tokens.primaryColor}`,
    outline: "none",
    resize: "none",
    overflow: "auto",
  },
});
