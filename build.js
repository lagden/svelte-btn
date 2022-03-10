#!/usr/bin/env node

import esbuild from 'esbuild'
import esbuildSvelte from 'esbuild-svelte'
import config from './svelte.config.js'

console.time('build')

try {
	await esbuild.build({
		entryPoints: ['src/btn.js'],
		bundle: true,
		sourcemap: true,
		minify: false,
		splitting: false,
		format: 'esm',
		outdir: './dist',
		target: ['es2021'],
		plugins: [
			esbuildSvelte(config),
		],
	})
} catch (error) {
	console.error(error)
	process.exit(1)
} finally {
	console.timeEnd('build')
}
