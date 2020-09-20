import { createSelector } from "@reduxjs/toolkit";
import { Status } from "../state";

const luke = "Luke Skywalker";
const vader = "Darth Vader";

export default createSelector(
  (state) => state.master,
  (master) => {
    const { name, status } = master;

    let bgColor = "grey";
    let side = "";
    let fontColor = "black";
    let buttonTitle = "try again";
    let notFulfilledText = "Who is your master?...";
    let buttonVariant = "welcome";

    if (status === Status.rejected) {
      notFulfilledText = "You are not ready for the force!";
    }
    if (status === Status.fulfilled) {
      buttonTitle = "choose your path again, Padawan";
    }

    if (name === luke) {
      bgColor = "bgLight";
      side = "light";
      buttonVariant = "light";
    }

    if (name === vader) {
      bgColor = "bgDark";
      side = "dark";
      fontColor = "white";
      buttonVariant = "dark";
    }

    const notPending = status !== Status.pending;
    const notFulfilled = status !== Status.fulfilled;

    return {
      name,
      status,
      bgColor,
      side,
      fontColor,
      buttonTitle,
      notFulfilledText,
      notPending,
      notFulfilled,
      buttonVariant,
    };
  }
);
