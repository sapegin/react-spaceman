"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const prefix = 'rspcmn';
let notAttachedCss = '';
function addClass(elem, fn) {
    const name = `${prefix}-${elem}`;
    const css = fn(`.${name}`);
    notAttachedCss += `${css}\n`;
    return name;
}
exports.addClass = addClass;
function addClassesForAllSizes(elem, fn) {
    const classes = {};
    const css = config_1.Sizes.map(({ size, value }) => {
        const name = `${prefix}-${elem}-${size}`;
        classes[size] = name;
        return fn(`.${name}`, value, size);
    }).join('\n');
    notAttachedCss += `${css}\n`;
    return classes;
}
exports.addClassesForAllSizes = addClassesForAllSizes;
function attachAllStyles() {
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
exports.attachAllStyles = attachAllStyles;
