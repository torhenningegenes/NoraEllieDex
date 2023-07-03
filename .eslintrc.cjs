module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:jest/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"airbnb",
		"airbnb/hooks",
		"airbnb-typescript",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
		"plugin:@tanstack/eslint-plugin-query/recommended",
	],
	plugins: ["react", "@typescript-eslint", "jest", "@tanstack/query"],
	root: true,
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
		project: "./**/tsconfig.json",
	},
	rules: {
		"import/prefer-default-export": "off",
		"import/no-extraneous-dependencies": "off", // Disabled because of some build pipeline bug. TODO: Should try to solve this again.
		"import/no-unresolved": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off", // Turn of when removing MUI
		"no-var": "error",
		"no-undef": "off", // Disabled because of https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
		eqeqeq: ["error", "always"],
		"prefer-const": "error",
		"no-duplicate-imports": "error",
		"jsx-quotes": ["error", "prefer-single"],
		"react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
		quotes: ["error", "single"],
		"react/require-default-props": [2, { ignoreFunctionalComponents: true }],
		"react/prop-types": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["camelCase", "PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"],
			},
			{
				selector: "variable",
				modifiers: ["const"],
				format: ["UPPER_CASE", "camelCase", "PascalCase"], // PascalCase for React components
			},
			{
				selector: "variable",
				format: ["camelCase"],
			},
			{
				selector: "function",
				format: ["camelCase"],
			},
			{
				selector: "classMethod",
				format: ["camelCase"],
			},
			{
				selector: "class",
				format: ["PascalCase"],
			},
			{
				selector: "enum",
				format: ["PascalCase"],
			},
			{
				selector: "enumMember",
				format: ["PascalCase"],
			},
		],
		"no-console": [
			"warn",
			{
				allow: ["warn", "error"],
			},
		],
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
	},
	overrides: [
		{
			files: ["*.stories.tsx"],
			rules: {
				"no-console": "off",
			},
		},
	],
	settings: {
		react: {
			version: "detect",
		},
	},
};
