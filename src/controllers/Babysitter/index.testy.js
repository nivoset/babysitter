// import React from "react";
// import { set } from "date-fns";
// import { mount } from "enzyme"
// import { BabysitterController } from "./index"
// import { render } from "@testing-library/react"
// import { Provider } from "react-redux";
// import { DatePicker } from "../../components/DatePicker/index"
// import { MockStoreCreator } from "redux-mock-store"

// const mockStore = MockStoreCreator({});

// mockStore.initialState = {
//   startDateTime: set(new Date(), { hours: 10, minutes: 0}),
//   bedtimeDateTime: set(new Date(), { hours: 10, minutes: 0}),
//   endDateTime: set(new Date(), { hours: 10, minutes: 0}),
// }

// it("Renders without crashing", () => {

//   const initialState = {
//     startDateTime: set(new Date(), { hours: 10, minutes: 0}),
//     bedtimeDateTime: set(new Date(), { hours: 10, minutes: 0}),
//     endDateTime: set(new Date(), { hours: 10, minutes: 0}),
//   };
//   const component = render(<BabysitterController />, mockStore);
//   console.error(component.find(DatePicker).length)

// });