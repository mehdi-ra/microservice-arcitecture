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
  rules: {
    indent: 'off',
    'no-useless-constructor': 'off',
    'no-return-await': 'off',
    'new-cap': 'off',
    'arrow-body-style': 'off',
		'object-shorthand': 'off',
    'no-unused-vars': 'off',
    'no-mixed-operators': 'off'
  },
};
