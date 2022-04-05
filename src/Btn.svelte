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
	/*
	:root {
		--tadashi_svelte_btn_common_primary: hsl(0deg 0% 0%);
		--tadashi_svelte_btn_common_secondary: hsl(0deg 0% 100%);
		--tadashi_svelte_btn_common_tertiary: hsl(0deg 0% 40%);
		--tadashi_svelte_btn_common_quaternary: hsl(0deg 0% 40%);
		--tadashi_svelte_btn_common_quinary: hsl(0deg 0% 100%);
		--tadashi_svelte_btn_common_senary: hsl(0deg 0% 0%);
	}

	primary:    background;
	secondary:  color;
	tertiary:   border;
	quaternary: shadow;
	quinary:    background (active|focus|hover);
	senary:     color (active|focus|hover);
	*/

	._tadashi_svelte_btn {
		align-items: var(--tadashi_svelte_btn_align_items, center);
		background-color: var(--tadashi_svelte_btn_background_color, var(--tadashi_svelte_btn_common_primary, hsl(0deg 0% 0%)));
		border: var(--tadashi_svelte_btn_border, 1px solid var(--tadashi_svelte_btn_common_tertiary, hsl(0deg 0% 40%)));
		border-radius: var(--tadashi_svelte_btn_border_radius, 0.15em);
		box-shadow: var(--tadashi_svelte_btn_box_shadow, 0px 3px 0px 0px var(--tadashi_svelte_btn_common_quaternary, hsl(0deg 0% 40%)));
		box-sizing: border-box;
		color: var(--tadashi_svelte_btn_color, var(--tadashi_svelte_btn_common_secondary, hsl(0deg 0% 100%)));
		cursor: var(--tadashi_svelte_btn_cursor, pointer);
		filter: var(--tadashi_svelte_btn_filter, none);
		font-size: var(--tadashi_svelte_btn_font_size, 1em);
		font-weight: var(--tadashi_svelte_btn_font_weight, 300);
		height: var(--tadashi_svelte_btn_height, 36px);
		opacity: var(--tadashi_svelte_btn_opacity, 1);
		outline: var(--tadashi_svelte_btn_outline, 0);
		overflow: hidden;
		padding: var(--tadashi_svelte_btn_padding, 0 1em);
		position: relative;
		transform: var(--tadashi_svelte_btn_transform, none);
		user-select: none;

		transition-duration: var(--tadashi_svelte_btn_transition_duration, 0.5s);
		transition-property: var(--tadashi_svelte_btn_transition_property, background-color, border-color, box-shadow, color, filter, transform);

		display: var(--tadashi_svelte_btn_display, inline-grid);
		grid-auto-flow: var(--tadashi_svelte_btn_grid_auto_flow, column);
		grid-template-columns: var(--tadashi_svelte_btn_grid_template_columns, auto);
		grid-gap: var(--tadashi_svelte_btn_grid_gap, 5px);
	}

	._tadashi_svelte_btn:disabled {
		cursor: not-allowed;
		opacity: var(--tadashi_svelte_btn___disabled_opacity, 0.5);
	}

	._tadashi_svelte_btn:not(:disabled):focus {
		background-color: var(--tadashi_svelte_btn___not_disabled___focus_background_color, var(--tadashi_svelte_btn_common_quinary, hsl(0deg 0% 100%)));
		border: var(--tadashi_svelte_btn___not_disabled___focus_border, var(--tadashi_svelte_btn_border, 1px solid var(--tadashi_svelte_btn_common_tertiary, hsl(0deg 0% 40%))));
		box-shadow: var(--tadashi_svelte_btn___not_disabled___focus_box_shadow, var(--tadashi_svelte_btn_box_shadow, 0px 3px 0px 0px var(--tadashi_svelte_btn_common_quaternary, hsl(0deg 0% 40%))));
		color: var(--tadashi_svelte_btn___not_disabled___focus_color, var(--tadashi_svelte_btn_color, var(--tadashi_svelte_btn_common_senary, hsl(0deg 0% 0%))));
		filter: var(--tadashi_svelte_btn___not_disabled___focus_filter, var(--tadashi_svelte_btn_filter, none));
		transform: var(--tadashi_svelte_btn___not_disabled___focus_transform, var(--tadashi_svelte_btn_transform, none));
	}

	._tadashi_svelte_btn:not(:disabled):hover {
		background-color: var(--tadashi_svelte_btn___not_disabled___hover_background_color, var(--tadashi_svelte_btn_common_quinary, hsl(0deg 0% 100%)));
		border: var(--tadashi_svelte_btn___not_disabled___hover_border, var(--tadashi_svelte_btn_border, 1px solid var(--tadashi_svelte_btn_common_tertiary, hsl(0deg 0% 40%))));
		box-shadow: var(--tadashi_svelte_btn___not_disabled___hover_box_shadow, var(--tadashi_svelte_btn_box_shadow, 0px 3px 0px 0px var(--tadashi_svelte_btn_common_quaternary, hsl(0deg 0% 40%))));
		color: var(--tadashi_svelte_btn___not_disabled___hover_color, var(--tadashi_svelte_btn_color, var(--tadashi_svelte_btn_common_senary, hsl(0deg 0% 0%))));
		filter: var(--tadashi_svelte_btn___not_disabled___hover_filter, var(--tadashi_svelte_btn_filter, none));
		transform: var(--tadashi_svelte_btn___not_disabled___hover_transform, var(--tadashi_svelte_btn_transform, none));
	}

	._tadashi_svelte_btn:not(:disabled):active {
		background-color: var(--tadashi_svelte_btn___not_disabled___active_background_color, var(--tadashi_svelte_btn_common_quinary, hsl(0deg 0% 100%)));
		border: var(--tadashi_svelte_btn___not_disabled___hover_border, var(--tadashi_svelte_btn_border, 1px solid var(--tadashi_svelte_btn_common_tertiary, hsl(0deg 0% 40%))));
		box-shadow: var(--tadashi_svelte_btn___not_disabled___hover_box_shadow, var(--tadashi_svelte_btn_box_shadow, 0px 0px 0px 0px var(--tadashi_svelte_btn_common_quaternary, hsl(0deg 0% 40%))));
		color: var(--tadashi_svelte_btn___not_disabled___active_color, var(--tadashi_svelte_btn_color, var(--tadashi_svelte_btn_common_senary, hsl(0deg 0% 0%))));
		filter: var(--tadashi_svelte_btn___not_disabled___active_filter, var(--tadashi_svelte_btn_filter, none));
		transform: var(--tadashi_svelte_btn___not_disabled___active_transform, translateY(3px));
	}
</style>
