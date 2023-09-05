/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: 'always',
	bracketSpacing: true,
	printWidth: 100,
	singleAttributePerLine: true,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } }
	]
}