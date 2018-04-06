const path = require('path');

module.exports = {
	entry: {
		cards: './cards.js',
		cardsExpansions: './cards-expansions.js'
	},
	output: {
		path: path.resolve(__dirname, 'website'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};