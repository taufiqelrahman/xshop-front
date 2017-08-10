// var name = 'index';
// var name = 'maintainstall';
var name = 'index';

// var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	// template: __dirname + '/src/index.html',
	template: __dirname + '/src/' + name + '.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	name: name,
	// entry: __dirname + '/src/' + name + '.js',
	entry: __dirname + '/src/' + name + '.js',
	output: {
		path: __dirname + '/build',
		filename: name + '.js',		
	    publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				// loaders: ["style-loader","css-loader","sass-loader"],
				loaders: ExtractTextPlugin.extract({
					fallback: "style-loader",
	                use: ["css-loader","sass-loader"]
	            })
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
		        loaders: [
		            // 'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]',
		            'file-loader?name=images/[name].[ext]',
		            {
		            	loader: 'image-webpack-loader?bypassOnDebug',
		            	query: {
		            		mozjpeg: {
				              progressive: true,
				            },
				            gifsicle: {
				              interlaced: false,
				            },
				            optipng: {
				              optimizationLevel: 7,
				            },
				            pngquant: {
				              quality: '75-90',
				              speed: 3,
				            },
		            	}
		            }
		        ]
			},
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
		]
	},
	devServer: {
	historyApiFallback: true,
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new ExtractTextPlugin('styles.css')
	]
};

