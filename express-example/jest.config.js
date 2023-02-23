const aliases = require('module-alias-jest/register');

console.log(aliases.jest);
module.exports = {
	testRegex: '(test.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleNameMapper: aliases.jest,

	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest',
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
};
