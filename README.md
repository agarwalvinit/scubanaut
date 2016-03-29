##Webpack Handlebars Starter Project

A simple starter project built on webpack, handlebars, sass and babel.

###Installation

    npm install
    
###Usage

Run the following to start up the development server and watch for changes.

    webpack --color --watch & webpack-dev-server --inline --content-base ./dist
    
Browse to `http://localhost:8080/`

Any additional build files/folders can be added to the `src` directory (js, etc.). Any additional public files can be added to the `dist` directory (images, etc.).

To add a new page to the site, simply create the view (see `index.handlebars`, `about.handlebars`, etc.) and add an additional `HtmlWebpackPlugin` instance to the `webpack.config.js`.

```javascript
new HtmlWebpackPlugin({
	title: 'About',
	filename: 'about/index.html',
	template: './src/views/about.handlebars'
})
```
