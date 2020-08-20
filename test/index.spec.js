import {cleanup, render} from '@testing-library/svelte'
import Btn from '../src/index.svelte'
import Slot from './Slot.svelte'

describe('Btn', () => {
	afterEach(cleanup)

	test('find svg ripple', () => {
		const {getByText} = render(Btn, {
			props: {
				class: 'customCss',
				disabled: true
			}
		})
		const svg = document.querySelector('svg')
		expect(svg).not.toBeNull();
	})

	test('should match snapshot', () => {
		const {container} = render(Btn)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot with slot', () => {
		const {container} = render(Slot)
		expect(container).toMatchSnapshot()
	})
})
