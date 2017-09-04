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
    };
  }
  handleDateChange = date => {
    this.setState({ date });
  };
  render() {
    return (
      <div className="App">
        <Date date={this.state.date} onDateChange={this.handleDateChange} />
      </div>
    );
  }
}

export default App;
