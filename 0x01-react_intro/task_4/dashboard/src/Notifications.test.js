import { Notifications } from './Notifications';
import React from 'react';
import { shallow } from 'enzyme';

describe('Notifications.test', () => {
  it('renders without crashing', () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });

  it('renders three list items', () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  });

  it('renders the text Here is the list of notifications', () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined();
  })
});

