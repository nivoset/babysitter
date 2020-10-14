import React from "react";
import { BabysitterController } from "./index"
import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";
import { store } from "../../store/index"

it("Renders without crashing", async () => {
  const {asFragment } = render(<Provider store = {store}><BabysitterController /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});