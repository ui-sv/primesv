import type { Preset } from '@primeuix/themes/types';
import { getContext, setContext } from 'svelte';

export const usePreset = () => getContext<Preset>('primesv.preset');
export const setPreset = (v: Preset) => setContext('primesv.preset', v);
