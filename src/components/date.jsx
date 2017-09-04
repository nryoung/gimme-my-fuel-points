import React from 'react';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

const Date = ({ date, onDateChange, focused, onFocusChange }) => (
  <SingleDatePicker
    date={date}
    onDateChange={onDateChange}
    focused={focused}
    onFocusChange={onFocusChange}
  />

);

export default Date
