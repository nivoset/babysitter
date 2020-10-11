import dateFNS, { set } from "date-fns";
import { calculateWageEarned } from "./calculateWage"

test("null date returns static message", () => {
    expect(calculateWageEarned({
      startDateTime: null, 
      bedtimeDateTime: new Date(), 
      endDateTime: new Date()
    })).toEqual("Invalid dates");
    expect(calculateWageEarned({
      startDateTime: new Date(), 
      bedtimeDateTime: null, 
      endDateTime: new Date()
    })).toEqual("Invalid dates");
    expect(calculateWageEarned({
      startDateTime: new Date(), 
      bedtimeDateTime: new Date(), 
      endDateTime: null
    })).toEqual("Invalid dates");
});

test("working 1 hour before bedtime", () => {
  jest.spyOn(dateFNS, "isWithinInterval").and.returnValue(true);
  expect(calculateWageEarned({
    startDateTime: set(new Date(), { hours: 18, minutes: 30 }), 
    bedtimeDateTime: set(new Date(), { hours: 20, minutes: 0 }), 
    endDateTime: set(new Date(), { hours: 19, minutes: 0 }),
  })).toEqual("Invalid dates");
});