import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

const ignoreWarnings = new Set([
	'css-unused-selector',
	'a11y-no-onchange',
	'a11y-label-has-associated-control',
	'missing-declaration',
])

export default {
	input: 'src/btn.js',
	output: [
		{
			format: 'es',
			entryFileNames: 'btn.js',
			dir: 'dist',
			sourcemap: true,
		},
	],
	plugins: [
		svelte({
			emitCss: false,
			onwarn(warning, handler) {
				// console.log('warning.code', warning.code)
				if (ignoreWarnings.has(warning.code)) {
					return
				}
				handler(warning)
			},
		}),
		resolve({browser: true}),
	],
	watch: {
		clearScreen: false,
	},
}
