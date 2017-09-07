import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Date from './date';

it('renders date correctly', () => {
  const tree = shallow(
    <Date
      date={moment('2017-09-06')}
      onDateChange={() => {}}
      focused={true}
      onFocusChange={() => {}}
    />
  );
  expect(tree).toMatchSnapshot();
});
