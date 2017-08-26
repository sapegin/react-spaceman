"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
exports.squishClass = {
    xxs: 'xxs',
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm',
    xl: 'l',
    xxl: 'xl',
};
// margin-bottom
const belowClasses = styles_1.addClassesForAllSizes('b', (name, value) => `${name} { margin-bottom: ${value}px }`);
// padding-left, padding-right
const xClasses = styles_1.addClassesForAllSizes('x', (name, value) => `${name} { padding-left: ${value}px; padding-right: ${value}px }`);
// padding-top, padding-bottom
const yClasses = styles_1.addClassesForAllSizes('y', (name, value) => `${name} { padding-top: ${value}px; padding-bottom: ${value}px }`);
// Inline
const inlineContainerClass = styles_1.addClass('i', name => `${name} { display: flex; flex-wrap: wrap }`);
const inlineClasses = styles_1.addClassesForAllSizes('i', (name, value) => `${name} > *:not(:last-child) { margin-right: ${value}px }`);
// Stack
const stackClasses = styles_1.addClassesForAllSizes('s', (name, value) => `${name} > *:not(:last-child) { margin-bottom: ${value}px }`);
styles_1.attachAllStyles();
function Panel({ below, inset, x, y, between, inline, squish, tag, tagProps, className, children }) {
    const xSize = inset || x;
    const ySize = inset || y;
    const classes = [
        className,
        below && belowClasses[below],
        xSize && xClasses[xSize],
        ySize && yClasses[squish ? exports.squishClass[ySize] : ySize],
        between && inline && inlineContainerClass,
        between && inline && inlineClasses[between],
        between && !inline && stackClasses[between],
    ].filter(Boolean).join(' ');
    const Tag = tag || (inline ? 'span' : 'div');
    return React.createElement(Tag, Object.assign({ className: classes }, tagProps), children);
}
exports.Panel = Panel;
exports.default = Panel;
