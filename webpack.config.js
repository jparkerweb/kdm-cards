const path = require('path');

module.exports = {
	entry: './cards.js',
	output: {
		path: path.resolve(__dirname, 'website'),
		filename: 'cards.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};