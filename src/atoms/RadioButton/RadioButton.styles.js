import { tokens } from "../../style.js";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  radioButton: {
    height: "2.5rem",
    padding: "0.5rem 3rem",
    margin: "1rem",
    font: tokens.btn,
    color: tokens.primaryColor,
    textTransform: "uppercase",
    backgroundColor: "transparent",
    border: `2px solid ${tokens.primaryColor}`,
    borderRadius: "8px",
    transition: tokens.transitionHover,
    cursor: "pointer",

    "&:hover": {
      color: tokens.secondaryColor,
      border: `2px solid ${tokens.secondaryColor}`,
    },
  },

  radio: {
    display: "none",

    "&:checked + span": {
      color: tokens.grayLighter,
      border: `2px solid ${tokens.secondaryColor}`,
      backgroundColor: tokens.secondaryColor,
    },
  },
});
