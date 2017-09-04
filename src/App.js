import React from 'react'
import moment from 'moment'
import './App.css';
import Date from './components/date'

const now = moment()

const App = () => (
  <div className="App">
    <Date 
      date={now}
    />
  </div>
);

export default App;
