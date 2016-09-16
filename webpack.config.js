var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		home: './src/views/home/home.js',
		about: './src/views/about/about.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader',
				query: {
					partialDirs: [path.resolve(__dirname, 'src', 'components')].concat(glob.sync('**/', { cwd: path.resolve(__dirname, 'src', 'components'), realpath: true }))
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'style',
					'css!sass'
				)
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader'
			}
		]
	},
	sassLoader: {
		includePaths: [
			'./src/styles',
			'./src/views/**/*.scss',
			'./src/components/**/*.scss'
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css'),
		new CleanWebpackPlugin(['dist'], { verbose: true }),
		new CopyWebpackPlugin([{ from: './src/static' }]),
		new HtmlWebpackPlugin({
			title: 'Home',
			filename: 'index.html',
			template: './src/views/home/home.handlebars',
			chunks: ['home']
		}),
		new HtmlWebpackPlugin({
			title: 'About',
			filename: 'about/index.html',
			template: './src/views/about/about.handlebars',
			chunks: ['about']
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.handlebars']
	}
};
