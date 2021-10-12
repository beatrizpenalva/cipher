import { tokens } from "../../style.js";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  buttonFilled: {
    paddingTop: ".625rem",
    paddingBottom: ".625rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    margin: "1rem",
    font: tokens.btn,
    color: tokens.grayLighter,
    textTransform: "uppercase",
    backgroundColor: tokens.primaryColor,
    border: "transparent",
    borderRadius: "8px",
    transition: tokens.transitionHover,
    cursor: "pointer",
    
    "&:hover": {
      backgroundColor: tokens.secondaryColor,
    },

    "&:disabled": {
      backgroundColor: tokens.grayLight,
    },
  },
});
