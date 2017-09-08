import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Date from './components/date';
import Time from './components/Time';

const now = moment();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      time: now,
    };
  }
  handleDateChange = date => {
    this.setState({ date });
  };

  handleTimeChange = time => {
    this.setState({ time });
  };
  render() {
    return (
      <div className="App">
        <Date
          date={this.state.date}
          onDateChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
        />
        <Time defaultValue={this.state.time} onChange={this.handleTimeChange} />
      </div>
    );
  }
}

export default App;
