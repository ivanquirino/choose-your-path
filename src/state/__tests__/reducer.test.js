import reducer, {
  initialState,
  fulfilled,
  pending,
  rejected,
  status,
} from "../index";

describe("master reducer", () => {
  test("fulfilled action", () => {
    const state = reducer(initialState, fulfilled("Luke Skywalker"));

    expect(state).toEqual({ status: status.fulfilled, name: "Luke Skywalker" });
  });

  test("rejected action", () => {
    const state = reducer(initialState, rejected());

    expect(state).toEqual({ status: status.rejected, name: "" });
  });

  test("pending action", () => {
    const state = reducer(
      { status: status.fulfilled, name: "Darth Vader" },
      pending()
    );

    expect(state).toEqual({ status: status.pending, name: "" });
  });
});
