<script lang="ts">
	import Aura from '@primeuix/themes/aura';
	import { setPreset } from '$lib/context.js';
	import '@unocss/reset/tailwind.css';
	import 'uno.css';

	setPreset(Aura);
</script>

<slot />
