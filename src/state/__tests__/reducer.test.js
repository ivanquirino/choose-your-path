import reducer, {
  initialState,
  fulfilled,
  pending,
  rejected,
  Status,
} from "../index";

describe("master reducer", () => {
  test("fulfilled action", () => {
    const state = reducer(initialState, fulfilled("Luke Skywalker"));

    expect(state).toEqual({ status: Status.fulfilled, name: "Luke Skywalker" });
  });

  test("rejected action", () => {
    const state = reducer(initialState, rejected());

    expect(state).toEqual({ status: Status.rejected, name: "" });
  });

  test("pending action", () => {
    const state = reducer(
      { status: Status.fulfilled, name: "Darth Vader" },
      pending()
    );

    expect(state).toEqual({ status: Status.pending, name: "" });
  });
});
