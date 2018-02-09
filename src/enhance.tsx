import * as React from 'react';
import { Size } from './consts';
import { Panel } from './Panel';

export interface IProps {
	below?: Size,
	inset?: Size,
	x?: Size,
	y?: Size,
	between?: Size,
	inline?: boolean,
	squish?: boolean,
	className?: string,
	children?: React.ReactNode,
	[key: string]: any,
}

export interface IDefaults {
	below?: Size,
	inset?: Size,
	x?: Size,
	y?: Size,
	between?: Size,
	inline?: boolean,
	squish?: boolean,
	className?: string,
}

export default function(tag: React.ReactType, defaults: IDefaults = {}) {
	return ({ below, inset, x, y, between, squish, className, children, ...props }: IProps) => (
		<Panel
			tag={tag}
			tagProps={props}
			below={below || defaults.below}
			inset={inset || defaults.inset}
			x={x || defaults.x}
			y={y || defaults.y}
			between={between || defaults.between}
			squish={squish || defaults.squish}
			className={className || defaults.className}
		>
			{children}
		</Panel>
	);
}
