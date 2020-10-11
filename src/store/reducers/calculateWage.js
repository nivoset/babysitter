import { differenceInMinutes, isBefore, addDays, set, isWithinInterval } from "date-fns";

const endDateLimit = set(new Date(), { hours: 16, minutes: 0});

const nightStart = set(new Date(), { hours: 5, minutes: 0});
const midnight = set(new Date(), { hours: 12, minutes: 0});

export const calculateWageEarned = ({startDateTime, bedtimeDateTime, endDateTime}) => {
  const wages = [
    { 
      start: nightStart,
      wage: 12,
      end: bedtimeDateTime,
      roundUp: true,
    },
    { 
      start: bedtimeDateTime,
      wage: 8,
      end: midnight
    },
    { 
      start: midnight,
      wage: 16, 
      end: endDateLimit,
      roundUp: true,
    },
  ];
  if (!startDateTime || !bedtimeDateTime || !endDateTime) return "Invalid dates";

  const endDateIsNextDay = isBefore(endDateTime, startDateTime);
  const effectiveEndDate = endDateIsNextDay ? addDays(endDateTime, 1) : endDateTime;

  const wageEarned = wages.reduce((acc, wage) => acc + timeInSlot(wage, startDateTime, effectiveEndDate), 0);


  return `wages earned= $${wageEarned}`;
}

const timeInSlot = (slot, startDate, endDate) => {
  const startInSlot = isWithinInterval(startDate, slot);
  const endInSlot = isWithinInterval(endDate, slot);

  let minutes = 0
  if (startInSlot && endInSlot) {
    minutes = differenceInMinutes(endDate, startDate);
  } else if (startInSlot) {
    minutes = differenceInMinutes(slot.end, startDate);
  } else if (endInSlot) {
    minutes = differenceInMinutes(endDate, slot.start);
  }
  
  return (slot.roundUp ? Math.ceil(minutes / 60) : minutes / 60) * slot.wage;
}