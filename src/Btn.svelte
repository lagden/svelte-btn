<script>
	let className = ''
	export {className as class}

	$$restProps.type = $$restProps?.type ?? 'button'
</script>

<button
	class="_tadashi_svelte_btn {className}"
	on:click
	{...$$restProps}
><slot /></button>

<style>
	:root {
		--tadashi_svelte_btn_align_items: center;
		--tadashi_svelte_btn_background: hsl(210, 50%, 50%);
		--tadashi_svelte_btn_border: none;
		--tadashi_svelte_btn_border_radius: 0.15em;
		--tadashi_svelte_btn_box_shadow: 0 0 8px hsla(0deg 0% 0% / 30%);
		--tadashi_svelte_btn_color: hsl(210deg 100% 100%);
		--tadashi_svelte_btn_cursor: pointer;
		--tadashi_svelte_btn_filter_brightness: 1.3;
		--tadashi_svelte_btn_font_size: 1em;
		--tadashi_svelte_btn_font_weight: 300;
		--tadashi_svelte_btn_grid_gap: 5px;
		--tadashi_svelte_btn_height: 36px;
		--tadashi_svelte_btn_outline: 0;
		--tadashi_svelte_btn_opacity: 0.5;
		--tadashi_svelte_btn_padding: 0 1em;
		--tadashi_svelte_btn_transition_duration: 0.5s;
	}

	._tadashi_svelte_btn {
		align-items: var(--tadashi_svelte_btn_align_items);
		background: var(--tadashi_svelte_btn_background);
		border: var(--tadashi_svelte_btn_border);
		border-radius: var(--tadashi_svelte_btn_border_radius);
		box-shadow: var(--tadashi_svelte_btn_box_shadow);
		box-sizing: border-box;
		color: var(--tadashi_svelte_btn_color);
		cursor: var(--tadashi_svelte_btn_cursor);
		font-size: var(--tadashi_svelte_btn_font_size);
		font-weight: var(--tadashi_svelte_btn_font_weight);
		height: var(--tadashi_svelte_btn_height);
		outline: var(--tadashi_svelte_btn_outline);
		overflow: hidden;
		padding: var(--tadashi_svelte_btn_padding);
		position: relative;
		transition: filter var(--tadashi_svelte_btn_transition_duration);
		will-change: filter;

		display: inline-grid;
		grid-auto-flow: column;
		grid-template-columns: auto;
		grid-gap: var(--tadashi_svelte_btn_grid_gap);
	}

	._tadashi_svelte_btn:disabled {
		cursor: not-allowed;
		opacity: var(--tadashi_svelte_btn_opacity);
	}

	._tadashi_svelte_btn:not(:disabled):active {
		background: var(--tadashi_svelte_btn_background);
		filter: brightness(var(--tadashi_svelte_btn_filter_brightness));
	}
</style>
