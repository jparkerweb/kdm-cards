const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		cards: "./cards.js"
	},
	output: {
		path: path.resolve(__dirname, "website"),
		filename: "[name].js"
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js"
		}
	}
};