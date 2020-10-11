import React from "react";
import { DatePicker } from "../../components/DatePicker/index.js"
import { useDispatch, useSelector } from "react-redux";
import { 
  updateBedtimeDate,
  updateStartDate,
  updateEndDate,
  selectEndDate,
  selectStartDate,
  selectWageEarned,
  selectBedtime,
} from "../../store/reducers/index"
import "./babysitter.css"

export const BabysitterController = ()  =>{
  const dispatch = useDispatch();
  const startDate = useSelector(selectStartDate);
  const bedtime = useSelector(selectBedtime);
  const endDate = useSelector(selectEndDate);
  const wageEarned = useSelector(selectWageEarned);

  return (
    <div className="display-items">
      <div id="start-date" title="Start Time">
        <DatePicker time={startDate} updateFunction={updateStartDate(dispatch)} />
      </div>
      <div id="bedtime" title="Bed Time">
        <DatePicker time={bedtime} updateFunction={updateBedtimeDate(dispatch)} />
      </div>
      <div id="end-date" title="End Time">
        <DatePicker time={endDate} updateFunction={updateEndDate(dispatch)} />
      </div>
      <div id="display" title="Display wage earned">
        {wageEarned}
      </div>
    </div>
  );
}