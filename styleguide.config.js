const path = require('path');
const { createConfig, css, typescript } = require('webpack-blocks');
module.exports = {
	sections: [
		{
			content: path.join(__dirname, 'styleguide/Intro.md'),
		},
		{
			components: 'src/[A-Z]*.tsx',
		},
	],
	propsParser: require('react-docgen-typescript').parse,
	require: [path.join(__dirname, 'styleguide/styles.css')],
	context: {
		jss: path.join(__dirname, 'styleguide/jss.js'),
	},
	webpackConfig: createConfig([css(), typescript()]),
	getComponentPathLine: componentName => `import Panel from 'react-spaceman';`,
	showUsage: true,
	showSidebar: false,
	styleguideDir: path.join(__dirname, 'styleguide-build'),
};
