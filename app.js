const Chromy = require('chromy')
const path = require('path')
const fs = require('fs')
const randomstring = require('randomstring')

var filename= ''

let chromy = new Chromy({visible:true})
chromy.chain()
      .goto('http://localhost:8000/dist/disorder.html')
      .wait(500)
    //   .screenshotMultipleSelectors('.card')
    // .screenshotSelector('.card')
    
   .screenshotMultipleSelectors("div.card",  function(error, image, index, selectors, subIndex) {
      // if(error) {console.log("error", error)}
      // console.log("image", image)
      console.log("index", index)
      console.log("selectors", selectors)
      console.log("subIndex", subIndex)
      

        filename = 'shots/' + subIndex + randomstring.generate(17) + '.png'
        fs.writeFileSync(filename, image)
     })

      
      .end()
      .then(_ => chromy.close())
      .catch(e => {
        console.log(e)
        chromy.close()
      })
