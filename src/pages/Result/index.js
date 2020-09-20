import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Container";
import { Flex, Box, Link, Button, Span } from "../../components/Tags";
import BackButton from "../../components/BackButton";
import { ResponseText, MasterImage } from "./styled";
import selector from "../../state/selector";
import { Status } from "../../state/index";
import dark from "../../images/darth-vader.png";
import light from "../../images/luke-skywalker.png";
import { pending as requestMaster } from "../../state";

const images = { dark, light };

const Result = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(requestMaster());
  }, [dispatch]);

  const {
    status,
    name,
    bgColor,
    fontColor,
    side,
    buttonTitle,
    notFulfilledText,
    notPending,
    notFulfilled,
    buttonVariant,
  } = useSelector(selector);
  const image = images[side];

  

  const handleStartClick = () => dispatch(requestMaster());

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Layout>
        <Link to="/">
          <BackButton color={fontColor} />
        </Link>

        <Flex
          mt="95px"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {notPending && (
            <Button
              variant={buttonVariant}
              mb="72px"
              onClick={handleStartClick}
              display={["none", "block"]}
            >
              {buttonTitle}
            </Button>
          )}

          {status === Status.fulfilled && <MasterImage src={image} />}

          {notFulfilled && <ResponseText>{notFulfilledText}</ResponseText>}

          {status === Status.fulfilled && (
            <ResponseText color={fontColor}>
              Your master is <Span fontWeight="bold">{name}</Span>
            </ResponseText>
          )}

          {notPending && (
            <Button
              variant={buttonVariant}
              mb="72px"
              onClick={handleStartClick}
              display={["block", "none"]}
            >
              {buttonTitle}
            </Button>
          )}
        </Flex>
      </Layout>
    </Box>
  );
};

export default Result;
