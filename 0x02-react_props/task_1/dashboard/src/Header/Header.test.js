import Header from "./Header";
import React from 'react';
import { shallow } from 'enzyme';

describe('Header tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Header />);

		expect(component).toBeDefined();
  });
  it('components render img and h1 tags', () => {
    const component = shallow(<Header />);
    expect(component.find('img').length).toBeGreaterThan(0);
    expect(component.find('h1').length).toBeGreaterThan(0);
  });

});