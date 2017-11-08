import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = message => {
	throw new Error(message);
};
