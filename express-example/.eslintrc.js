module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {indent: 'off', 'no-useless-constructor': 'off', 'no-return-await': 'off'},
};
