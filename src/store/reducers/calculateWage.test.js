import { set } from "date-fns";
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
  expect(calculateWageEarned({
    startDateTime: set(new Date(), { hours: 9, minutes: 30 }), 
    bedtimeDateTime: set(new Date(), { hours: 11, minutes: 0 }), 
    endDateTime: set(new Date(), { hours: 10, minutes: 0 }),
  })).toEqual("wages earned= $12");
});
test("working 1 hour before bedtime, 1 hour after bedtime", () => {
  expect(calculateWageEarned({
    startDateTime: set(new Date(), { hours: 10, minutes: 0 }), 
    bedtimeDateTime: set(new Date(), { hours: 11, minutes: 0 }), 
    endDateTime: set(new Date(), { hours: 12, minutes: 0 }),
  })).toEqual("wages earned= $20");
});
test("working 1 hour before bedtime, 1 hour after bedtime, and 1 hour after midnight", () => {
  expect(calculateWageEarned({
    startDateTime: set(new Date(), { hours: 10, minutes: 0 }), 
    bedtimeDateTime: set(new Date(), { hours: 11, minutes: 0 }), 
    endDateTime: set(new Date(), { hours: 13, minutes: 0 }),
  })).toEqual("wages earned= $36");
});