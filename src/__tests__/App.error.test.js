import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import createApp from "../App";
import nock from "nock";

describe("App Integration tests", () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  test("Error result then success result", async () => {
    let lightSide = nock("http://swapi.dev/api/people")
      .get("/1")
      .reply(
        500,
        { name: "Luke Skywalker" },
        { "Access-Control-Allow-Origin": "*" }
      );
    let darkSide = nock("http://swapi.dev/api/people")
      .get("/4")
      .delay(1000)
      .reply(
        500,
        { name: "Darth Vader" },
        { "Access-Control-Allow-Origin": "*" }
      );

    const App = createApp();
    const { getByText } = render(<App />);

    const startButton = getByText("START");

    fireEvent.click(startButton);

    getByText("Who is your master?...");

    await screen.findByText("You are not ready for the force!");
    screen.getAllByText("try again");

    lightSide.done();
    darkSide.done();

    // Now success

    lightSide = nock("http://swapi.dev/api/people")
      .get("/1")
      .reply(
        200,
        { name: "Luke Skywalker" },
        { "Access-Control-Allow-Origin": "*" }
      );
    darkSide = nock("http://swapi.dev/api/people")
      .get("/4")
      .delay(1000)
      .reply(
        200,
        { name: "Darth Vader" },
        { "Access-Control-Allow-Origin": "*" }
    );
    
    fireEvent.click(screen.getAllByText('try again')[0]);

    getByText("Who is your master?...");

    await screen.findByText(/Your master is/);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();

    lightSide.done();
    darkSide.done();
  });
});
