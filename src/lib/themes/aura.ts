import { tv } from 'tailwind-variants';

export const button = tv({
	base: 'flex items-center',
	variants: {
		iconposition: { left: '', right: '', top: '', bottom: '' },
		badgeseverity: { secondary: '', info: '', success: '', warn: '', danger: '', contrast: '' },
		loading: '',
		severity: {
			secondary: '',
			info: '',
			success: '',
			warn: '',
			danger: '',
			contrast: '',
			help: ''
		},
		raised: '',
		rounded: '',
		size: { sm: '', md: '', lg: '' },
		variant: { outline: '', text: '', link: '' },
		fluid: 'w-full'
	},
	compoundVariants: []
});
