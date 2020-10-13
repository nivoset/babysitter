import React from "react"
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {  TimePicker } from "@material-ui/pickers";

export const DatePicker = ({time, updateFunction = () => {}, onChange = () => {}}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <TimePicker  
      value={time}
      onChange={onChange}
      onAccept={updateFunction}
      openTo="hours"
      minutesStep={5}
    />
  </MuiPickersUtilsProvider>);