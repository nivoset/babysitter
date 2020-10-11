import { set, addHours } from "date-fns";
import { calculateWageEarned } from "./calculateWage"

// Actions
export const UPDATE_START_DATE = "update_start_date";
export const UPDATE_BEDTIME_DATE = "update_bedtime_date";
export const UPDATE_END_DATE = "update_end_date";

const startDateTime = set(new Date(), { hours: 5, minutes: 0});
const bedtimeDateTime = set(new Date(), { hours: 9, minutes: 0});
const endDateTime = set(new Date(), { hours: 10, minutes: 0});

const defaultState = {
  startDateTime,
  bedtimeDateTime,
  endDateTime,
  wageEarned: calculateWageEarned(startDateTime, bedtimeDateTime, endDateTime),
}

export const rootReducer = (store = defaultState, action) => {
  switch(action.type) {
    case UPDATE_BEDTIME_DATE: 
      return { 
        ...store,
        bedtimeDateTime: addHours(action.payload, -12),
      };
    case UPDATE_START_DATE:
      return { 
        ...store,
        startDateTime: addHours(action.payload, -12)
      };
    case UPDATE_END_DATE:
      return { 
        ...store,
        endDateTime: addHours(action.payload, -12)
      };
    default: return store;
  }
}

//Action generators
export const updateStartDate = (dispatch) => (startDate) => {
  dispatch({ type: UPDATE_START_DATE, payload: startDate})
}

export const updateBedtimeDate = (dispatch) => (endDate) => {
  dispatch({ type: UPDATE_BEDTIME_DATE, payload: endDate})
}

export const updateEndDate = (dispatch) => (endDate) => {
  dispatch({ type: UPDATE_END_DATE, payload: endDate})
}

//Selectors
export const selectStartDate = (state) => addHours(state.startDateTime, 12);
export const selectBedtime = (state) => addHours(state.bedtimeDateTime, 12);
export const selectEndDate = (state) => addHours(state.endDateTime, 12);
export const selectWageEarned = (store) => calculateWageEarned(store);
