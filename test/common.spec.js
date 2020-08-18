import {filterProps} from '../src/common'

describe('filterProps', () => {
	test('filterProps', () => {
		let props = filterProps({x: 1, y: 2, Class: 'ignore', $$: 'ignore'}, ['x'])
		expect(props).toStrictEqual({"y": 2})
	})

	test('filterProps default', () => {
		let props = filterProps({x: 1, y: 2, Class: 'ignore', $$: 'ignore'})
		expect(props).toStrictEqual({"x": 1, "y": 2})
	})
})
