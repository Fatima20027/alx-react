import React from 'react';
import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('Footer tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Footer />);

		expect(component).toBeDefined();
  });
  it('components at the very least render the text “Copyright”', () => {
    const component = shallow(<Header />);
    expect(component.text()).toContain('Copyright');
  });

});