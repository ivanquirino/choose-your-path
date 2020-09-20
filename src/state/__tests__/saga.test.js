import { expectSaga } from "redux-saga-test-plan";
import { masterSaga } from "../saga";
import { fulfilled } from "../index";

describe("master saga", () => {
  test("light side success", () => {
    return expectSaga(masterSaga)
      .provide({ race: () => ({ light: { name: "Luke Skywalker" } }) })      
      .put(fulfilled("Luke Skywalker"))
      .run();
  });

  test("dark side success", () => {
    return expectSaga(masterSaga)
      .provide({ race: () => ({ dark: { name: "Darth Vader" } }) })
      .put(fulfilled("Darth Vader"))
      .run();
  });
});
