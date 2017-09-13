import { shallow } from 'enzyme';
import * as React from 'react';
import { Panel } from '../Panel';

describe('Panel', () => {
	it('should render a div', () => {
		const wrapper = shallow(<Panel>hello</Panel>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should add a class for margin below', () => {
		const wrapper = shallow(<Panel below="m">hello</Panel>);
		expect(wrapper.prop('className')).toBe('rspcmn-b-m');
	});

	it('should add a class for horizontal padding', () => {
		const wrapper = shallow(<Panel x="m">hello</Panel>);
		expect(wrapper.prop('className')).toBe('rspcmn-x-m');
	});

	it('should add a class for vertical padding', () => {
		const wrapper = shallow(<Panel y="m">hello</Panel>);
		expect(wrapper.prop('className')).toBe('rspcmn-y-m');
	});

	it('should add a class for padding', () => {
		const wrapper = shallow(<Panel inset="m">hello</Panel>);
		expect(wrapper.prop('className')).toBe('rspcmn-x-m rspcmn-y-m');
	});

	it('should add a class for squished padding', () => {
		const wrapper = shallow(
			<Panel inset="m" squish>
				hello
			</Panel>
		);
		expect(wrapper.prop('className')).toBe('rspcmn-x-m rspcmn-y-s');
	});

	it('should add a class for margin between children', () => {
		const wrapper = shallow(
			<Panel between="m">
				<div>ein</div>
				<div>zwei</div>
				<div>polizei</div>
			</Panel>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should add a class for margin between inline children', () => {
		const wrapper = shallow(
			<Panel between="m" inline>
				<span>ein</span>
				<span>zwei</span>
				<span>polizei</span>
			</Panel>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should add a custom class name', () => {
		const wrapper = shallow(
			<Panel below="m" className="pizza">
				hello
			</Panel>
		);
		expect(wrapper.prop('className')).toBe('pizza rspcmn-b-m');
	});

	it('should render a custom tag', () => {
		const wrapper = shallow(<Panel tag="header">hello</Panel>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should pass props to a custom tag', () => {
		const wrapper = shallow(
			<Panel tag="header" tagProps={{ id: 'pizza' }}>
				hello
			</Panel>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
