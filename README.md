##Webpack Handlebars Starter Project

A simple starter project built on webpack, handlebars, sass and babel. Useful for creating and working with reusable, modular components.

###Installation

    npm install
    
###Usage

Run the following to start up the development server and watch for changes.

    webpack --color --watch & webpack-dev-server --inline --content-base ./dist
    
Browse to `http://localhost:8080/`

The generated `dist` folder is created with the following structure:

    dist
      about
        index.html
      css
        about.css
        index.css
      js
        about.js
        index.js
      index.html

The generated `html` files will have links to their respective `[name].css` and `[name].js` files.

Any additional build files/folders can be added to the `src` directory (js, etc.). Any additional public files can be added to the `dist` directory (images, etc.).

To add a new page to the site, simply create the view (see `index.handlebars`, `about.handlebars`, etc.), create a javascript file (see `index.js`, `about.js`, etc.), create a sass file (see `index.scss`, `about.scss`, etc.) and update the `webpack.config.js` as follows:

####Entry

```javascript
entry: {
	index: './src/index.js',
	about: './src/about.js',
	//new entry goes here
},
```

####HtmlWebpackPlugin

```javascript
new HtmlWebpackPlugin({
	//new instance goes here, chunks value should match key from entry above
})
```
