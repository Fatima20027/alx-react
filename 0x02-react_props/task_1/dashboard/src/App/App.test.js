import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications'; // Adjust the import paths as necessary
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
