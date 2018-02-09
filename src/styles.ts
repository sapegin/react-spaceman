import { Sizes } from './config';

const prefix = 'rspcmn';

let notAttachedCss = '';

export type ClassMap = { [index: string]: string };

export function addClass(elem: string, fn: (name: string) => string): string {
	const name = `${prefix}-${elem}`;
	const css = fn(`.${name}`);

	notAttachedCss += `${css}\n`;

	return name;
}

export function addClassesForAllSizes(
	elem: string,
	fn: (name: string, value: number, size: string) => string
): ClassMap {
	const classes: ClassMap = {};
	const css = Sizes.map(({ size, value }) => {
		const name = `${prefix}-${elem}-${size}`;
		classes[size] = name;
		return fn(`.${name}`, value, size);
	}).join('\n');

	notAttachedCss += `${css}\n`;

	return classes;
}

export function attachAllStyles() {
	if (typeof document !== 'undefined') {
		// Create <style> element
		const element = document.createElement('style');
		element.type = 'text/css';
		element.setAttribute('data-meta', prefix);
		element.textContent = notAttachedCss;

		// Add to the DOM
		const container = document.querySelector('head');
		if (!container) {
			throw new Error('<head> tag not found');
		}
		container.appendChild(element);

		notAttachedCss = '';
	}
}
