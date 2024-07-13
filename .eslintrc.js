// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ['expo', 'prettier'],
	plugins: ['prettier', 'simple-import-sort'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'off',
			},
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
};
