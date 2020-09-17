import { color, space, typography, variant, flexbox } from "styled-system";
import styled from "styled-components";
import css from "@styled-system/css";

export const Span = styled.span(color, space, typography);

export const Flex = styled.div(
  {
    display: "flex",
  },
  flexbox
);

export const Button = styled.button(
  css({
    border: "none",
    borderRadius: "10px",
    px: "17px",
    py: "2px",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "20px",
    fontFamily: "Montserrat, sans-serif",
    height: "56px",
    cursor: "pointer",
    "&:active": {
      fontSize: "17px",
    },
  }),
  variant({
    variants: {
      welcome: {
        bg: "blue",
        color: "white",
        letterSpacing: "0.35em",
        width: "189px",
        "&:hover": { bg: "blueDark" },
      },
      light: {
        bg: "black",
        color: "white",
        width: "347px",
      },
      dark: {
        bg: "white",
        color: "black",
        width: "347px",
      },
    },
  })
);
