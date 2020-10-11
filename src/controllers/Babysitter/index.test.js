import React from "react";
import { shallow } from "enzyme"
import { BabysitterController } from "./index"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it("Renders without crashing", () => {
  const store = mockStore({});
  shallow(<Provider store={store}><BabysitterController /></Provider>);
});