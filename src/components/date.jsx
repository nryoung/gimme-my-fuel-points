import React from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

const Date = ({ date, onDateChange, focused, onFocusChange }) => (
  <SingleDatePicker
    date={date}
    onDateChange={onDateChange}
    focused={focused}
    onFocusChange={onFocusChange}
    numberOfMonths={1}
    showDefaultInputIcon={true}
    isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
  />

);

export default Date
