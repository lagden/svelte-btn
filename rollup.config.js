import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

const ignoreWarnings = new Set([
	'css-unused-selector'
])

export default {
	input: 'src/btn.js',
	output: [
		{
			file: 'dist/btn.js',
			format: 'es'
		}
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
			}
		}),
		resolve({browser: true})
	]
}
