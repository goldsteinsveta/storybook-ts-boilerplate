module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module'
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
	],
	plugins: [
		"@typescript-eslint",
		"react",
		"simple-import-sort",
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "arrow-spacing":["warn",{ "before": true, "after": true }],
		"comma-dangle": ["error", {
			"objects": "always-multiline",
    }],
		"indent": ["error", "tab"],
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "no-tabs": ["error", { "allowIndentationTabs": true }],
    "no-trailing-spaces": ["warn"],
		"object-curly-spacing": ["error", "always"],
		"quotes": ["error", "single",	{ "avoidEscape": true }],
		"semi": ["error", "always"],
		"simple-import-sort/sort": "error",
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
    "switch-colon-spacing": ["error", {"after": true, "before": false}]
	}
}
