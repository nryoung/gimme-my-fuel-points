import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const format = 'h:mm a';

const Time = ({ defaultValue, onChange }) => (
  <TimePicker
    showSecond={false}
    defaultValue={defaultValue}
    className="xxx"
    onChange={onChange}
    format={format}
    use12Hours
  />
);

export default Time;
