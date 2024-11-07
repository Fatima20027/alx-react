import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('Login tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Login />);

		expect(component).toBeDefined();
  });
  it('components renders 2 input tags and 2 label tags', () => {
    const component = shallow(<Header />);
    expect(component.find('input').length).toBe(2);
    expect(component.find('label').length).toBe(2);
  });

});