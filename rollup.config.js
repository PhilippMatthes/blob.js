import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sucrase from '@rollup/plugin-sucrase';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

/**
 * Flag to indicate release builds
 */
const isPublish = !!process.env.PUBLISH;

/**
 * Flag to indicate build of library
 */
const isProduction = !process.env.ROLLUP_WATCH;

/**
 * Use official typescript plugin for release builds
 * and sucrase plugin during development (faster)
 */
const typescriptPlugin = isPublish
	? typescript({
		include: 'src/**',
		rootDir: './'
	})
	: sucrase({
		transforms: ['typescript', 'jsx']
	});


export default [
	// browser-friendly UMD build
	{
		input: 'src/index.ts',
		output: {
			name: 'blob',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			resolve(),   			// so Rollup can resolve packages
			commonjs(),  			// so Rollup can convert commonjs to an ES module
			typescriptPlugin, 		// so Rollup can convert TypeScript to JavaScript
			isProduction && terser() 	// minify, but only in production
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/index.ts',
		external: [],
		plugins: [
			typescriptPlugin, 		// so Rollup can convert TypeScript to JavaScript
			isProduction && terser() 	// minify, but only in production
		],
		output: [
			{ file: pkg.main, format: 'cjs', exports: 'default' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
