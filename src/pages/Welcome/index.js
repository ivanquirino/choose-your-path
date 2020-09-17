import React from "react";
import { Link } from 'react-router-dom';
import Layout from "../../components/Container";
import { Title, SubTitle } from "./styled";
import { Span, Button, Flex } from "../../components/Tags";

const Welcome = () => (
  <Layout>
    <Title>
      Welcome to <Span fontWeight="bold">iClinic</Span>
    </Title>
    <SubTitle>FRONTEND CHALLENGE</SubTitle>
    <Flex justifyContent="center">
      <Link to="/result">
        <Button variant="welcome">START</Button>
      </Link>      
    </Flex>
  </Layout>
);

export default Welcome;
