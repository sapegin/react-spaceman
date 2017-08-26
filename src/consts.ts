export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export const Sizes : { [index : string] : number | undefined } = {
	none: undefined,
	xs: 2,
	s: 4,
	m: 8,
	l: 16,
	xl: 32,
	xxl: 64,
	xxxl: 128
};
