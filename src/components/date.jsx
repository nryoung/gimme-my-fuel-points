import React from 'react';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

const Date = ({ date, onDateChange }) => (
  <SingleDatePicker
    date={date}
    onDateChange={onDateChange}
    focused={true}
    onFocusChange={() => {}}
  />

);

export default Date
