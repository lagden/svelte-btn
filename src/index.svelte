<script>
	import {filterProps} from './common.js'
	import rippleAnimation from './ripple.js'

	export let btnNode = null

	let className = ''
	export {className as class}

	const props = filterProps(['class'], $$props)
	const _btn__ripple__base = '_btn__ripple__base'

	function init(node) {
		const rippleElement = node.querySelector(`.${_btn__ripple__base}`)
		const rippleClasses = [...rippleElement.classList.values()]
		const _rippleAnimation = rippleAnimation(rippleClasses)
		rippleElement.remove()
		node.addEventListener('click', _rippleAnimation)
		return {
			destroy() {
				node.removeEventListener('click', _rippleAnimation)
			}
		}
	}
</script>

<button use:init on:click bind:this={btnNode} class="_btn {className}" {...props}>
	<slot />
	<div class="_btn__ripple {_btn__ripple__base}"></div>
</button>

<style>
	:root {
		--hue: 0;
		--button-background-color: hsl(var(--hue), 0%, 47%);
		--button-background-image: none;
		--button-border-radius: 0.15em;
		--button-box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.3);
		--button-disabled: 0.3;
		--button-font-size: 1em;
		--button-ripple-color: hsl(var(--hue), 100%, 100%);
		--button-text-color: hsl(var(--hue), 100%, 100%);
		--button-padding: 0.8em 1em;
		--button-min-width: auto;
	}

	._btn {
		background-color: var(--button-background-color);
		background-image: var(--button-background-image);
		border: 0;
		border-radius: var(--button-border-radius);
		box-shadow: var(--button-box-shadow);
		box-sizing: border-box;
		color: var(--button-text-color);
		cursor: pointer;
		font-size: var(--button-font-size);
		font-weight: 300;
		min-width: var(--button-min-width);
		outline: 0;
		overflow: hidden;
		padding: var(--button-padding);
		position: relative;
	}

	._btn:disabled {
		cursor: not-allowed;
		opacity: var(--button-disabled);
	}

	._btn__ripple {
		animation: ripple 0.4s linear;
		background-color: var(--button-ripple-color);
		border-radius: 50%;
		box-sizing: border-box;
		pointer-events: none;
		position: absolute;
		transform: scale(0);
		transform-origin: 50% 50%;
	}

	@keyframes ripple {
		to {
			opacity: 0;
			transform: scale(2.5);
		}
	}
</style>
