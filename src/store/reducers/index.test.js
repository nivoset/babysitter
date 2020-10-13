import * as reducerCode from "./index"
import { addHours } from "date-fns";

//creators
test("created proper event for start", () => {
  expect(reducerCode.updateStartDate(new Date(0))).toEqual({ type: reducerCode.UPDATE_START_DATE, payload: new Date(0)})
})
test("created proper event for bedtime", () => {
  expect(reducerCode.updateBedtimeDate(new Date(0))).toEqual({ type: reducerCode.UPDATE_BEDTIME_DATE, payload: new Date(0)})
})
test("created proper event for end", () => {
  expect(reducerCode.updateEndDate(new Date(0))).toEqual({ type: reducerCode.UPDATE_END_DATE, payload: new Date(0)})
})

//selectors
test("selects start date", () => {
  expect(reducerCode.selectStartDate({ startDateTime: new Date(0) })).toEqual(addHours(new Date(0), 12));
})
test("selects bedtime", () => {
  expect(reducerCode.selectBedtime({ bedtimeDateTime: new Date(0) })).toEqual(addHours(new Date(0), 12));
})
test("selects end date", () => {
  expect(reducerCode.selectEndDate({ endDateTime: new Date(0) })).toEqual(addHours(new Date(0), 12));
})

//reducer tests
test("updates start date", () => {
  expect(reducerCode.rootReducer({}, reducerCode.updateStartDate(addHours(new Date(0), 12))).startDateTime).toEqual(new Date(0));
})
test("updates bedtime date", () => {
  expect(reducerCode.rootReducer({}, reducerCode.updateBedtimeDate(addHours(new Date(0), 12))).bedtimeDateTime).toEqual(new Date(0));
})
test("updates end date", () => {
  expect(reducerCode.rootReducer({}, reducerCode.updateEndDate(addHours(new Date(0), 12))).endDateTime).toEqual(new Date(0));
})
test("invalid action", () => {
  expect(reducerCode.rootReducer({}, {type: "unknown"})).toEqual({});
})