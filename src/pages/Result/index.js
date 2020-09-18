import React from "react";
import Layout from "../../components/Container";
import { Flex, Box, Link, Button, Span } from "../../components/Tags";
import BackButton from "../../components/BackButton";
import { ResponseText } from "./styled";

const Welcome = () => {
  const status = "pending";

  return (
    <Box bg="grey" minHeight="100vh">
      <Layout bg="grey">
        <Link to="/">
          <BackButton color="black" />
        </Link>

        <Flex justifyContent="center">
          {status === "pending" && (
            <ResponseText>Who is your master?...</ResponseText>
          )}
        </Flex>
      </Layout>
    </Box>
  );
};

export default Welcome;
