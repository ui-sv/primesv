import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// @ts-expect-error it's a typescript file
import unocss from './src/lib/unocss';

export default defineConfig({
	plugins: [sveltekit(), unocss()]
});
