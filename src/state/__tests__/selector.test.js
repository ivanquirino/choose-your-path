import selector from "../selector";
import { Status } from "../index";

describe("Master selector", () => {
  test("pending state", () => {
    const state = {
      master: { status: Status.pending, name: "" },
    };

    const data = selector(state);

    expect(data).toEqual({
      name: "",
      status: Status.pending,
      bgColor: "grey",
      side: "",
      fontColor: "black",
      buttonTitle: "try again",
      notFulfilledText: "Who is your master?...",
      notPending: false,
      notFulfilled: true,
      buttonVariant: "welcome",
    });
  });

  test("rejected state", () => {
    const state = {
      master: { status: Status.rejected, name: "" },
    };

    const data = selector(state);

    expect(data).toEqual({
      name: "",
      status: Status.rejected,
      bgColor: "grey",
      side: "",
      fontColor: "black",
      buttonTitle: "try again",
      notFulfilledText: "You are not ready for the force!",
      notPending: true,
      notFulfilled: true,
      buttonVariant: "welcome",
    });
  });

  test("fulfilled state light side", () => {
    const state = {
      master: { status: Status.fulfilled, name: "Luke Skywalker" },
    };

    const data = selector(state);

    expect(data).toEqual({
      name: "Luke Skywalker",
      status: Status.fulfilled,
      bgColor: "bgLight",
      side: "light",
      fontColor: "black",
      buttonTitle: "choose your path again, Padawan",
      notFulfilledText: "Who is your master?...",
      notPending: true,
      notFulfilled: false,
      buttonVariant: "light",
    });
  });

  test("fulfilled state dark side", () => {
    const state = {
      master: { status: Status.fulfilled, name: "Darth Vader" },
    };

    const data = selector(state);

    expect(data).toEqual({
      name: "Darth Vader",
      status: Status.fulfilled,
      bgColor: "bgDark",
      side: "dark",
      fontColor: "white",
      buttonTitle: "choose your path again, Padawan",
      notFulfilledText: "Who is your master?...",
      notPending: true,
      notFulfilled: false,
      buttonVariant: "dark",
    });
  });
});
