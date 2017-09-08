import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }
  handleFocusChange = ({ focused }) => {
    this.setState({ focused });
  };
  render() {
    const { date, onDateChange } = this.props;
    return (
      <SingleDatePicker
        date={date}
        onDateChange={onDateChange}
        focused={this.state.focused}
        hideKeyboardShortcutsPanel={true}
        onFocusChange={this.handleFocusChange}
        numberOfMonths={1}
        showDefaultInputIcon={true}
        isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
      />
    );
  }
}
export default Date;
