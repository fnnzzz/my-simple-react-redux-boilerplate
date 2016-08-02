var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var autoprefixer = require('autoprefixer');


module.exports = {

	context: path.join(__dirname, './src'),
	devtool: 'cheap-module-eval-source-map',

	entry: {
		app: [
			path.join(__dirname, './src/entrypoint.js'),
		],
		commons: [
			'react',
			'react-dom',
			'babel-polyfill',
			'isomorphic-fetch',
			'react-helmet'
		],
	},

	output: {
		path: path.join(__dirname, './dist'),
		filename: 'app.bundle.js',
		chunkFilename: '[name]-[chunkhash:7].js',
		publicPath: '/'
	},
	
	sassLoader: {
		includePaths: [bourbon]
  	},

	postcss: function () {
		return [autoprefixer];
	},

	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['eslint']
			}
		],
		loaders: [
			{
				test: /\.html$/,
				loader: 'html',
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot', 'babel'],
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader', 
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader', 
					'css-loader', 
					'sass-loader',
					'postcss-loader'
				]
			},
            {
				test: /\.(ico)$/,
				loader: "file",
				query: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader?limit=5000&name=images/pic-[name].[hash:6].[ext]"
			}
            // {
            //     loader: 'file-loader?name=assets[name]-[hash:6].[ext]',
            //     test: /\.png($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/
            // },
		]
	},

	resolve: {
		root: path.join(__dirname, './src'),
		alias: {
			actions: 'actions',
			assets: 'assets',
			components: 'components',
			constants: 'constants',
			containers: 'containers',
			pages: 'pages',
			reducers: 'reducers',
			stores: 'stores',
			sagas: 'sagas',
			utils: 'utils'
		},
		extensions: ['', '.js'],
		modulesDirectories: ["node_modules", "bower_components"]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			minChunks: Infinity,
			filename: 'commons.bundle.js'
		}),

        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["bower"])
        ),

        new HtmlWebpackPlugin({
        	template: 'assets/index.html',
        	filename: 'index.html',
        	inject: 'body',
        	// favicon: 'assets/favicon.ico',
        	hash: true
        }),


		// FOR PRODUCTION
		// 
		// new webpack.optimize.OccurenceOrderPlugin(),
		// new webpack.optimize.DedupePlugin(),
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': '"production"'
		// }),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: { warnings: false },
		// 	comments: false,
		// 	sourceMap: false,
		// 	mangle: true,
		// 	minimize: true
		// }),


		// extract imported css to real files
		//
		// loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
		// new ExtractTextPlugin("base.css"), 
	],


	devServer: {
		contentBase: path.join(__dirname, './src'),
		host: "0.0.0.0",
		historyApiFallback: true,
	},

	watchOptions: {
	  poll: 2000,
	}
};
