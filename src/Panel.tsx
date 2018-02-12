import * as React from 'react';
import { Size } from './consts';
import { addClass, addClassesForAllSizes, attachAllStyles, ClassMap } from './styles';

export const squishClass: ClassMap = {
	xxs: 'xxs',
	xs: 'xs',
	s: 'xs',
	m: 's',
	l: 'm',
	xl: 'l',
	xxl: 'xl',
};

// margin-bottom
const belowClasses = addClassesForAllSizes(
	'b',
	(name, value) => `${name} { margin-bottom: ${value}px }`
);

// padding-left, padding-right
const xClasses = addClassesForAllSizes(
	'x',
	(name, value) => `${name} { padding-left: ${value}px; padding-right: ${value}px }`
);

// padding-top, padding-bottom
const yClasses = addClassesForAllSizes(
	'y',
	(name, value) => `${name} { padding-top: ${value}px; padding-bottom: ${value}px }`
);

// Inline
const inlineContainerClass = addClass('i', name => `${name} { display: flex; flex-wrap: wrap }`);
const inlineClasses = addClassesForAllSizes(
	'i',
	(name, value) => `${name} > *:not(:last-child) { margin-right: ${value}px }`
);

// Stack
const stackClasses = addClassesForAllSizes(
	's',
	(name, value) => `${name} > *:not(:last-child) { margin-bottom: ${value}px }`
);

attachAllStyles();

export interface IProps {
	below?: Size,
	inset?: Size,
	x?: Size,
	y?: Size,
	between?: Size,
	inline?: boolean,
	squish?: boolean,
	className?: string,
	tag?: React.ReactType,
	tagProps?: object,
	children?: React.ReactNode,
}

export function Panel({
	below,
	inset,
	x,
	y,
	between,
	inline,
	squish,
	tag,
	tagProps,
	className,
	children,
}: IProps) {
	const xSize = inset || x;
	const ySize = inset || y;
	const classes = [
		className,
		below && belowClasses[below],
		xSize && xClasses[xSize],
		ySize && yClasses[squish ? squishClass[ySize] : ySize],
		between && inline && inlineContainerClass,
		between && inline && inlineClasses[between],
		between && !inline && stackClasses[between],
	]
		.filter(Boolean)
		.join(' ');
	const Tag = tag || (inline ? 'span' : 'div');
	return (
		<Tag className={classes} {...tagProps}>
			{children}
		</Tag>
	);
}

export default Panel;
