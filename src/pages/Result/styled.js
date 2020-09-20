import styled from "styled-components";
import css from "@styled-system/css";
import { space, color, typography, layout } from "styled-system";

export const ResponseText = styled.p(
  css({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "36px",
    lineHeight: "44px",
    textAlign: 'center'
  }),
  space,
  color,
  typography
);

export const MasterImage = styled.img(
  css({
    borderRadius: "999px",
    height: "380px",
    width: "380px",
    display: 'block'
  }),
  layout
);
