import {cleanup, render} from '@testing-library/svelte'
import Btn from '../src/index.svelte'

describe('Btn', () => {

	afterEach(cleanup)

	test('find svg ripple', () => {
		const {getByText} = render(Btn, {class: 'customCss'})
		const svg = document.querySelector('svg')
		expect(svg).not.toBeNull();
	})

	test('should match snapshot', () => {
		const {container} = render(Btn, {
			props: {class: 'snapshot'}
		})
		expect(container).toMatchSnapshot()
	})
})
