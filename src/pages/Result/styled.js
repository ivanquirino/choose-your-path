import styled from "styled-components";
import css from "@styled-system/css";
import { space, color, typography } from "styled-system";

export const ResponseText = styled.p(
  css({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "36px",
    lineHeight: "44px",
  }),
  space,
  color,
  typography
);
