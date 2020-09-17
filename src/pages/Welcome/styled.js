import styled from "styled-components";
import css from "@styled-system/css";

export const Title = styled.h1(
  css({
    color: "blue",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "72px",
    lineHeight: "88px",
    textAlign: "center",
    fontWeight: "normal",
    mt: "210px",
    mb: "7px",
  })
);

export const SubTitle = styled.h3(
  css({
    color: 'blue',
    fontWeight: 'normal',
    m: 0,
    mb: '167px',
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    textAlign: "center",
    letterSpacing: "0.35em",
  })
);
