var axios = require('axios')
var Vue = require('vue')
Vue.config.devtools = true

var app = new Vue({
	el: '#app',
	data: {
		cards: {}
	},
	mounted: function() {
		this.$nextTick(function () {
			var self = this
			axios.get('/injuries.json')
				.then(function (response) {
					self.cards = response.data
				})
				.catch(function (error) {
					console.log(error);
				})
		})
	}
})