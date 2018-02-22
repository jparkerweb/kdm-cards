var cardJSON = require('./dist/cards.json')
console.log(cardJSON)
var app = new Vue({
    el: '#app',
    data: {
        cards: cardJSON,
        msg: "hello"
    }
})