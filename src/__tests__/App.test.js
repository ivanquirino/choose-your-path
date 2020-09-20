import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import createApp from "../App";
import nock from "nock";

describe("App Integration tests", () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  test("Light side result, then dark side result", async () => {
    let lightSide = nock("https://swapi.dev/api/people")
      .get("/1")
      .reply(
        200,
        { name: "Luke Skywalker" },
        { "Access-Control-Allow-Origin": "*" }
      );
    let darkSide = nock("https://swapi.dev/api/people")
      .get("/4")
      .delay(1000)
      .reply(
        200,
        { name: "Darth Vader" },
        { "Access-Control-Allow-Origin": "*" }
      );

    const App = createApp();
    const { getByText } = render(<App />);

    const startButton = getByText("START");

    fireEvent.click(startButton);

    getByText("Who is your master?...");

    await screen.findByText(/Your master is/);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();

    lightSide.done();
    darkSide.done();

    // Now for the dark side

    lightSide = nock("https://swapi.dev/api/people")
      .get("/1")
      .delay(1000)
      .reply(
        200,
        { name: "Luke Skywalker" },
        { "Access-Control-Allow-Origin": "*" }
      );
    darkSide = nock("https://swapi.dev/api/people")
      .get("/4")
      
      .reply(
        200,
        { name: "Darth Vader" },
        { "Access-Control-Allow-Origin": "*" }
    );
    
    fireEvent.click(screen.getAllByText('choose your path again, Padawan')[0]);

    await screen.findByText(/Darth Vader/);
    expect(screen.getByText("Darth Vader")).toBeInTheDocument();

    lightSide.done();
    darkSide.done();
  });  
});
