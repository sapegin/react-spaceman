import Panel, { spaceman } from '../index';

describe('API', () => {
	it('should export an API', () => {
		expect(Panel).toEqual(expect.any(Function));
		expect(spaceman).toEqual(expect.any(Function));
	});
});
