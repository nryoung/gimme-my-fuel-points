import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Date from './components/Date';
import Time from './components/Time';
import EntryID from './components/EntryID';

const now = moment();

class App extends Component {
  state = {
    date: now,
    time: now,
    entryid1: '',
    entryid2: '',
    entryid3: '',
    entryid4: '',
    entryid5: '',
    entryid6: '',
  };
  handleDateChange = date => {
    this.setState({ date });
  };

  handleTimeChange = time => {
    this.setState({ time });
  };

  handleEntryIDChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
        <EntryID onChange={this.handleEntryIDChange} />
      </div>
    );
  }
}

export default App;
