import React from "react"
import {  TimePicker } from "@material-ui/pickers";

export const DatePicker = ({time, updateFunction, }) => (<TimePicker  
    value={time}
    onChange={() => {}}
    onAccept={updateFunction}
    openTo="hours"
    minutesStep={5}
  />);