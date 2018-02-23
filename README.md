
# `KDM-Cards`  
Generate `disorder`, `fighting arts`, and `secret fighting arts` cards, to upload to a print on demand service (like printer studio, or make playing cards).  The generated cards are intended to be printed on 2" x 2" side cards.

----

## Setup
* install packages:  
`npm install`

## Requirements
* Chrome web browser (updated to latest version)
* node and npm (install from nodejs.org)
* any static web server (I like "local-web-server": https://www.npmjs.com/package/local-web-server)


## Usage
* host the files in the `website` folder using something like "local-web-server"  
(http://127.0.0.1:8000/cards.html)

* run the app:  
`node app`

## Example
![Example](./example.gif)  

### JSON Data Sources
* https://github.com/toconnell/kdm-manager/blob/master/v2/api/assets/disorders.py
* https://github.com/toconnell/kdm-manager/blob/master/v2/api/assets/fighting_arts.py