import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from "enzyme"
import { DatePicker } from '.';
import {  TimePicker } from "@material-ui/pickers";

test('renders learn react link', () => {
  const component = create((<DatePicker time={new Date(0)} updateFunction={() => {}} />));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('onUpdate function called', () => {
  const mockUpdate = jest.fn(() => {});
  const component = shallow((<DatePicker time={new Date(0)} updateFunction={mockUpdate} />));
  
  component.find(TimePicker).simulate("accept");
  component.find(TimePicker).simulate("change");
  expect(mockUpdate).toHaveBeenCalled();
});

test('onChange function called', () => {
  const mockChange = jest.fn(() => {});
  const component = shallow((<DatePicker time={new Date(0)} onChange={mockChange} />));
  
  component.find(TimePicker).simulate("accept");
  component.find(TimePicker).simulate("change");
  expect(mockChange).toHaveBeenCalled();
});
