<svelte:options accessors />

<script>
	let className = ''
	export {className as class}
	export let __node = undefined
</script>

<button
	class="_tadashi_svelte_btn {className}"
	bind:this={__node}
	on:click
	{...$$restProps}
>
	<slot />
	<svg class="_tadashi_svelte_btn__ripple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
		<circle cx="300" cy="300" r="300" />
	</svg>
</button>

<style>
	:root {
		--tadashi-svelte-btn-background-color: hsl(210, 50%, 50%);
		--tadashi-svelte-btn-background-image: none;
		--tadashi-svelte-btn-border: 0;
		--tadashi-svelte-btn-border-radius: 0.15em;
		--tadashi-svelte-btn-box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.3);
		--tadashi-svelte-btn-text-color: hsl(210, 100%, 100%);
		--tadashi-svelte-btn-cursor: pointer;
		--tadashi-svelte-btn-font-size: 1em;
		--tadashi-svelte-btn-font-weight: 300;
		--tadashi-svelte-btn-height: 36px;
		--tadashi-svelte-btn-min-width: 64px;
		--tadashi-svelte-btn-outline: 0;
		--tadashi-svelte-btn-padding: 0 1em;
		--tadashi-svelte-btn-disabled: 0.3;
		--tadashi-svelte-btn-ripple-color: hsl(210, 100%, 100%);
		--tadashi-svelte-btn-ripple-duration: 0.4s;
		--tadashi-svelte-btn-ripple-width: 100%;
		--tadashi-svelte-btn-opacity-duration: 1s;
		--tadashi-svelte-btn-slot-justify-content: center;
	}

	._tadashi_svelte_btn {
		align-items: center;
		background-color: var(--tadashi-svelte-btn-background-color);
		background-image: var(--tadashi-svelte-btn-background-image);
		border: var(--tadashi-svelte-btn-border);
		border-radius: var(--tadashi-svelte-btn-border-radius);
		box-shadow: var(--tadashi-svelte-btn-box-shadow);
		box-sizing: border-box;
		color: var(--tadashi-svelte-btn-text-color);
		cursor: var(--tadashi-svelte-btn-cursor);
		display: inline-flex;
		font-size: var(--tadashi-svelte-btn-font-size);
		font-weight: var(--tadashi-svelte-btn-font-size);
		height: var(--tadashi-svelte-btn-height);
		justify-content: var(--tadashi-svelte-btn-slot-justify-content);
		min-width: var(--tadashi-svelte-btn-min-width);
		outline: var(--tadashi-svelte-btn-outline);
		overflow: hidden;
		padding: var(--tadashi-svelte-btn-padding);
		position: relative;
	}

	._tadashi_svelte_btn:before {
		content: ' ';
		overflow: hidden;
		width: 0px;
	}

	._tadashi_svelte_btn:disabled {
		cursor: not-allowed;
		opacity: var(--tadashi-svelte-btn-disabled);
	}

	._tadashi_svelte_btn__ripple {
		fill: var(--tadashi-svelte-btn-ripple-color);
		opacity: 0;
		pointer-events: none;
		width: var(--tadashi-svelte-btn-ripple-width);
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(2);
		transition: transform var(--tadashi-svelte-btn-ripple-duration), opacity var(--tadashi-svelte-btn-opacity-duration);
		will-change: transform, opacity;
	}

	._tadashi_svelte_btn:not(:disabled):active {
		background-color: var(--tadashi-svelte-btn-background-color);
		background-image: var(--tadashi-svelte-btn-background-image);
	}

	._tadashi_svelte_btn:not(:disabled):active > ._tadashi_svelte_btn__ripple {
		transform: translate(-50%, -50%) scale(0);
		opacity: 1;
		transition: 0s;
	}
</style>
