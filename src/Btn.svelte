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
		/*--tadashi_svelte_btn_background_color: hsl(210deg 50% 50%);*/
		/*--tadashi_svelte_btn_border: none;*/
		--tadashi_svelte_btn_border_radius: 0.15em;
		/*--tadashi_svelte_btn_box_shadow: 0 0 5px hsla(0deg 0% 0% / 30%); */
		--tadashi_svelte_btn_box_shadow: none;
		/*--tadashi_svelte_btn_color: hsl(0deg 0% 100%);*/
		--tadashi_svelte_btn_cursor: pointer;
		--tadashi_svelte_btn_font_size: 1em;
		--tadashi_svelte_btn_font_weight: 300;
		--tadashi_svelte_btn_grid_gap: 5px;
		--tadashi_svelte_btn_height: 36px;
		--tadashi_svelte_btn_outline: 0;
		--tadashi_svelte_btn_opacity: 0.5;
		--tadashi_svelte_btn_padding: 0 1em;
		--tadashi_svelte_btn_transition_property: background-color, border, box-shadow, color, filter;
		--tadashi_svelte_btn_transition_duration: 0.5s;

		--tadashi_svelte_btn___disabled_opacity: 0.5;

		--tadashi_svelte_btn___not_disabled___active_background_color: hsl(210deg 50% 50%);
		--tadashi_svelte_btn___not_disabled___active_border: none;
		--tadashi_svelte_btn___not_disabled___active_box_shadow: none;
		--tadashi_svelte_btn___not_disabled___active_color: hsl(0deg 0% 100%);
		--tadashi_svelte_btn___not_disabled___active_filter: brightness(1.3);
	}

	._tadashi_svelte_btn {
		align-items: var(--tadashi_svelte_btn_align_items);
		background-color: var(--tadashi_svelte_btn_background_color, var(--tadashi_svelte_btn___not_disabled___active_background_color));
		border: var(--tadashi_svelte_btn_border, var(--tadashi_svelte_btn___not_disabled___active_border));
		border-radius: var(--tadashi_svelte_btn_border_radius);
		box-shadow: var(--tadashi_svelte_btn_box_shadow, var(--tadashi_svelte_btn___not_disabled___active_box_shadow));
		box-sizing: border-box;
		color: var(--tadashi_svelte_btn_color, var(--tadashi_svelte_btn___not_disabled___active_color));
		cursor: var(--tadashi_svelte_btn_cursor);
		font-size: var(--tadashi_svelte_btn_font_size);
		font-weight: var(--tadashi_svelte_btn_font_weight);
		height: var(--tadashi_svelte_btn_height);
		outline: var(--tadashi_svelte_btn_outline);
		overflow: hidden;
		padding: var(--tadashi_svelte_btn_padding);
		position: relative;
		transition-duration: var(--tadashi_svelte_btn_transition_duration);
		transition-property: var(--tadashi_svelte_btn_transition_property);

		display: inline-grid;
		grid-auto-flow: column;
		grid-template-columns: auto;
		grid-gap: var(--tadashi_svelte_btn_grid_gap);
	}

	._tadashi_svelte_btn:disabled {
		cursor: not-allowed;
		opacity: var(--tadashi_svelte_btn___disabled_opacity);
	}

	._tadashi_svelte_btn:not(:disabled):hover {
		background-color: var(--tadashi_svelte_btn___not_disabled___hover_background_color, var(--tadashi_svelte_btn___not_disabled___active_background_color));
		border: var(--tadashi_svelte_btn___not_disabled___hover_border, var(--tadashi_svelte_btn___not_disabled___active_border));
		box-shadow: var(--tadashi_svelte_btn___not_disabled___hover_box_shadow, var(--tadashi_svelte_btn___not_disabled___active_box_shadow));
		color: var(--tadashi_svelte_btn___not_disabled___hover_color, var(--tadashi_svelte_btn___not_disabled___active_color));
	}

	._tadashi_svelte_btn:not(:disabled):active {
		background-color: var(--tadashi_svelte_btn___not_disabled___active_background_color);
		border: var(--tadashi_svelte_btn___not_disabled___active_border);
		box-shadow: var(--tadashi_svelte_btn___not_disabled___active_box_shadow);
		color: var(--tadashi_svelte_btn___not_disabled___active_color);
		filter: var(--tadashi_svelte_btn___not_disabled___active_filter);
	}
</style>
