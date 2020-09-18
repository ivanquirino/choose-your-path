import React from "react";
import { color } from "styled-system";
import styled from "styled-components";
import css from "@styled-system/css";
import { Span } from "./Tags";

const Button = styled.button(
  css({
    bg: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    p: 0,
  }),
  color
);

const BackButton = ({ className, ...props }) => {
  return (
    <Button {...props}>
      <svg
        className={className}
        width="31"
        height="26"
        viewBox="0 0 31 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31.0001 11.3333H6.69006L15.5117 2.51166L13.1551 0.154999L0.310059 13L13.1551 25.845L15.5117 23.4883L6.69006 14.6667H31.0001V11.3333Z" />
      </svg>
      <Span ml="16px" fontSize="18px" textDecoration="none">
        back
      </Span>
    </Button>
  );
};

export default styled(BackButton)((props) => ({
  stroke: props.theme.colors[props.color],
  fill: props.theme.colors[props.color],
}));
