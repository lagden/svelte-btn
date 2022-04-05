/* globals describe, afterEach, beforeAll, afterAll, test, expect */

import timekeeper from 'timekeeper'
import {jest} from '@jest/globals'
import {cleanup, render, fireEvent} from '@testing-library/svelte'
import Btn from '../src/btn.js'
import Slot from './Slot.svelte'

beforeAll(() => {
	// Para o tempo
	timekeeper.freeze(1_604_416_038 * 1000)
})

afterAll(() => {
	timekeeper.reset()
})

describe('Btn', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Btn)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Btn, {
			props: {
				type: 'submit',
				class: 'customCss',
				required: true,
				disabled: false,
				'data-test': 1,
			},
		})
		expect(container).toMatchSnapshot()
	})

	test('events should work', async () => {
		const {component, getByTitle} = render(Btn, {
			props: {
				title: 'btn',
			},
		})

		const mock = jest.fn()
		const button = getByTitle('btn')

		component.$on('click', mock)
		await fireEvent.click(button)

		expect(mock).toHaveBeenCalled()
	})

	test('should match snapshot with slot', () => {
		const {container} = render(Slot)
		expect(container).toMatchSnapshot()
	})
})
