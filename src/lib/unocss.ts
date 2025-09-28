import unocss, { type VitePluginConfig } from 'unocss/vite';
import {
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
	presetWind3,
	presetWebFonts
} from 'unocss';
import { defu } from 'defu';

export default (options: VitePluginConfig = {}) => {
	return unocss(
		defu(options, {
			presets: [
				presetWind3(),
				presetWebFonts({
					fonts: {
						sans: 'Inter'
					}
				})
			],
			transformers: [transformerCompileClass(), transformerDirectives(), transformerVariantGroup()]
		})
	);
};
