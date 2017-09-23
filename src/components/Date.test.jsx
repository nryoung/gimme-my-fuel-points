import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import Date from './Date';

it('renders date correctly', () => {
  const tree = shallow(
    <Date date={moment('2017-09-06T00:00:00.000Z')} onDateChange={() => {}} />
  );
  expect(tree).toMatchSnapshot();
});
