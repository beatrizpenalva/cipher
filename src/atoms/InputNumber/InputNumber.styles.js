import { tokens } from "../../style.js";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  label: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    font: tokens.btn,
    color: tokens.grayDarker,
  },

  textField: {
    padding: "0.5rem",
    font: tokens.pSamll,
    color: tokens.grayDarker,
    backgroundColor: tokens.black_10,
    border: "none",
    borderBottom: `2px solid ${tokens.primaryColor}`,
    outline: "none",
  },
});