import React from 'react';
import { create } from 'react-test-renderer';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {DatePicker} from '.';
import DateFnsUtils from '@date-io/date-fns';

test('renders learn react link', () => {
  console.warn(create)
  const component = create((
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker time={new Date(0)} updateFunction={() => {}} />
    </MuiPickersUtilsProvider>));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
