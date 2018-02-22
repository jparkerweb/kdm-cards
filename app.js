const Chromy = require('chromy')
const path = require('path')
const fs = require('fs')
const randomstring = require('randomstring')

var filename

let chromy = new Chromy()
chromy.chain()
      .goto('http://localhost:8000/test.html')
    //   .wait(1)
    //   .screenshotMultipleSelectors('.card')
    // .screenshotSelector('.card')
    .screenshotMultipleSelectors(
        ['.card'],
        handlescreenshots,
        {useQuerySelectorAll: true}
    )

    //   .result((png) => {
    //     filename = 'shots/' + randomstring.generate(17) + '.png'
    //     fs.writeFileSync(filename, png)
    //     // fs.writeFileSync('shots/test.png', png)
    //   })
      .end()
      .then(_ => chromy.close())
      .catch(e => {
        console.log(e)
        chromy.close()
      })

function handlescreenshots(error, png, index, selectors, sub){
  console.log('>>>',error, selectors[index], sub);
  fs.writeFileSync(`./shots/${selectors[index]}_${sub}.png`, png);
}