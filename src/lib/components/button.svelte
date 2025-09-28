<script lang="ts" module>
	export type ButtonProps = {
		children?: Snippet;
		label?: string;
		icon?: Snippet | Component | string;
		iconposition?: 'left' | 'right' | 'top' | 'bottom';
		iconclass?: ClassValue;
		badge?: string;
		badgeclass?: ClassValue;
		badgeseverity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast';
		loading?: boolean;
		loadingicon?: Snippet | Component | string;
		href?: string;
		target?: string;
		severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | 'help';
		raised?: boolean;
		rounded?: boolean;
		size?: 'sm' | 'md' | 'lg';
		variant?: 'outline' | 'text' | 'link';
		fluid?: boolean;
		unstyled?: boolean;
	};
</script>

<script lang="ts">
	import { usePreset } from '$lib/context.js';
	import { Button } from 'bits-ui';
	import type { Component, Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	console.log(usePreset());

	let {
		children,
		label,
		icon,
		iconposition = 'left',
		iconclass,
		badge,
		badgeclass,
		badgeseverity,
		loading = $bindable(false),
		loadingicon,
		href,
		target,
		severity,
		raised,
		rounded,
		size = 'md',
		variant,
		fluid,
		unstyled
	}: ButtonProps = $props();
</script>

<Button.Root>
	{#if label}
		<span>{label}</span>
	{:else}
		{@render children?.()}
	{/if}
</Button.Root>
