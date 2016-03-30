var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

// run with the following to allow webpack-dev-server and htmlwebpackplugin to work together
// webpack --color --watch & webpack-dev-server --inline --content-base ./dist

module.exports = {
	context: path.resolve(__dirname),
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader'
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
		includePaths: ['./src/scss']
	},
	plugins: [
		new ExtractTextPlugin('css/site.css'),
		new HtmlWebpackPlugin({
			title: 'Home',
			filename: 'index.html',
			template: './src/views/index.handlebars'
		}),
		new HtmlWebpackPlugin({
			title: 'About',
			filename: 'about/index.html',
			template: './src/views/about.handlebars'
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.handlebars']
	}
};
