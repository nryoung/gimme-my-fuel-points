import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Date from './components/date';

const now = moment();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      focused: false,
    };
  }
  handleDateChange = date => {
    this.setState({ date });
  };

  handleFocusChange = ({ focused }) => {
    this.setState({ focused });
  };
  render() {
    return (
      <div className="App">
        <Date
          date={this.state.date}
          onDateChange={this.handleDateChange}
          focused={this.state.focused}
          onFocusChange={this.handleFocusChange}
        />
      </div>
    );
  }
}

export default App;
