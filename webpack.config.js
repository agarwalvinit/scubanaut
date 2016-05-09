var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		index: './src/index.js',
		about: './src/about.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
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
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin({
			title: 'Home',
			filename: 'index.html',
			template: './src/views/index.handlebars',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			title: 'About',
			filename: 'about/index.html',
			template: './src/views/about.handlebars',
			chunks: ['about']
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.handlebars']
	}
};
