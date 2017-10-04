import { shallow } from 'enzyme';
import * as React from 'react';
import enhance from '../enhance';

describe('enhance', () => {
	it('should return a function', () => {
		const result = enhance('div');
		expect(result).toEqual(expect.any(Function));
	});

	it('returned function should render a div', () => {
		const Div = enhance('div');
		const wrapper = shallow(<Div>hello</Div>);
		expect(wrapper).toMatchSnapshot();
	});

	it('returned function should accept Spaceman props', () => {
		const Div = enhance('div');
		const wrapper = shallow(<Div below="m">hello</Div>);
		expect(wrapper).toMatchSnapshot();
	});

	it('returned function should set default Spaceman props', () => {
		const Div = enhance('div', { below: 'm' });
		const wrapper = shallow(<Div>hello</Div>);
		expect(wrapper).toMatchSnapshot();
	});

	it('returned function should pass extra props to a div', () => {
		const Div = enhance('div');
		const wrapper = shallow(<Div id="pizza">hello</Div>);
		expect(wrapper).toMatchSnapshot();
	});
});
