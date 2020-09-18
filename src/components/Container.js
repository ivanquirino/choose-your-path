import css from "@styled-system/css";
import styled from "styled-components";
import { color } from 'styled-system';

const Container = styled.div(
  css({
    maxWidth: 1080,
    mx: "auto",
    px: '64px',
    pt: '35px'
  }),
  color
);

export default Container;
