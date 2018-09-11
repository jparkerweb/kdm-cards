const Chromy = require('chromy')
const path = require('path')
const fs = require('fs-extra')

var directory = "generated-cards"
var url = "http://localhost:8000/index.html"

// creats screen shots directory if is doesn't already exist
if (!fs.existsSync("./" + directory)){
    fs.mkdirSync("./" + directory);
}

// clean out screen shots directory from previous run
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});


var filename = ''
var selectorName = ''

console.log("please wait, taking screen shots...")

let chromy = new Chromy({visible:false})
chromy.chain()
	.goto(url)
	.wait(500)
	.screenshotMultipleSelectors(
		[".-disorder", ".-fighting-art", ".-secret-fighting-art", ".-injuries", ".-abilities"],
		function(error, image, index, selectors, subIndex) {
			if(index >= 0 && subIndex >= 0) {
				selectorName = selectors[index].replace(/[\.-]/g, "")
				filename = directory + '/' + selectorName + "_" + (subIndex + 1) + '.png'
				console.log("saving: ", filename)
				fs.writeFileSync(filename, image)
			}
		},
		{ useQuerySelectorAll: true }
	)
	.end()
	.then(_ => chromy.close())
	.catch(e => {
		console.log(e)
		chromy.close()
	})

// copy card backs
copyCardBack('ability_back.jpg')
copyCardBack('disorder_back.jpg')
copyCardBack('fightingart_back.jpg')
copyCardBack('injury_back.jpg')
copyCardBack('secretfightingart_back.jpg')

function copyCardBack(src) {
	var dest = './generated-cards/' + src
	src = './card-backs/' + src

	fs.copy(src, dest, err => {
		if (err) return console.error(err)
		console.log('created: ', dest)
	})
}