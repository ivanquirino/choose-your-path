import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../../components/Container";
import { Title, SubTitle } from "./styled";
import { Span, Button, Flex } from "../../components/Tags";
import { pending } from "../../state";

const Welcome = () => {
  const dispatch = useDispatch();

  const handleStartClick = () => dispatch(pending());

  return (
    <Layout>
      <Title>
        Welcome to <Span fontWeight="bold">iClinic</Span>
      </Title>
      <SubTitle>FRONTEND CHALLENGE</SubTitle>
      <Flex justifyContent="center">
        <Link to="/result">
          <Button variant="welcome" onClick={handleStartClick}>
            START
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Welcome;
