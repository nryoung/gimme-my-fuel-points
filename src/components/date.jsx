import React from 'react';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

const Date = () => (
  <SingleDatePicker
    date={null}
    onDateChange={date => {}}
    focused={true}
    onFocusChange={() => {}}
  />

);

export default Date
