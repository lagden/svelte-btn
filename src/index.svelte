<script>
	import {filterProps} from './common.js'

	export let btnNode = null

	let className = ''
	export {className as class}

	const props = filterProps($$props, ['class'])
</script>

<button on:click bind:this={btnNode} class="_btn {className}" {...props}>
	<slot />
	<svg class="_btn__ripple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><circle cx="300" cy="300" r="50" /></svg>
</button>

<style>
	:root {
		--btn-ripple-hue: 210;
		--btn-ripple-background-color: hsl(var(--btn-ripple-hue), 50%, 50%);
		--btn-ripple-background-image: none;
		--btn-ripple-border-radius: 0.15em;
		--btn-ripple-box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.3);
		--btn-ripple-disabled: 0.3;
		--btn-ripple-font-size: 1em;
		--btn-ripple-ripple-color: hsl(var(--btn-ripple-hue), 100%, 100%);
		--btn-ripple-ripple-duration: 0.4s;
		--btn-ripple-text-color: hsl(var(--btn-ripple-hue), 100%, 100%);
		--btn-ripple-padding: 0.8em 1em;
		--btn-ripple-min-width: auto;
	}

	._btn {
		background-color: var(--btn-ripple-background-color);
		background-image: var(--btn-ripple-background-image);
		border: 0;
		border-radius: var(--btn-ripple-border-radius);
		box-shadow: var(--btn-ripple-box-shadow);
		box-sizing: border-box;
		color: var(--btn-ripple-text-color);
		cursor: pointer;
		font-size: var(--btn-ripple-font-size);
		font-weight: 300;
		min-width: var(--btn-ripple-min-width);
		outline: 0;
		overflow: hidden;
		padding: var(--btn-ripple-padding);
		position: relative;
	}

	._btn:disabled {
		cursor: not-allowed;
		opacity: var(--btn-ripple-disabled);
	}

	._btn__ripple {
		fill: var(--btn-ripple-ripple-color);
		display: block;
		position: absolute;
		/*
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
		*/
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		pointer-events: none;
		transform: scale(10);
		opacity: 0;
		transition: transform var(--btn-ripple-ripple-duration), opacity 1s;
	}

	._btn:active {
		background-color: var(--btn-ripple-background-color);
		background-image: var(--btn-ripple-background-image);
	}

	._btn:active > ._btn__ripple {
		transform: scale(0);
		opacity: 1;
		transition: 0s;
	}
</style>
