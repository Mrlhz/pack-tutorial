const fs = require('fs')
const path = require('path')

const defaultRe = /\{\{((?:.|\r?\n)+?)\}\}/g;

const templateDir = path.resolve(__dirname, '../template/card')
const distDir = path.resolve(__dirname, '../dist/card')

!fs.existsSync(distDir) && fs.mkdirSync(distDir)


function copyFiles(from, to) {
	// check the from && to path exists

	fs.readdirSync(from).forEach(file => {
		const children = path.join(from, file)
		const output = path.join(to, file)
		const stat = fs.statSync(children)
		const copy = !fs.existsSync(output)
		// console.log(file, copy)
		// console.log(children)
		// console.log(output)
		if (stat.isDirectory()) {
			copy && fs.mkdirSync(output)
			copyFiles(children, output)
		} else if (stat.isFile()) {
			/* copy && */ fs.copyFileSync(children, output)
		}

	})

}

function replaceMatch(path, matchList = {}) {
	const jsonContent = require(path)
	Object.keys(matchList).forEach(key => {
		jsonContent[key] = matchList[key]
	})

	return jsonContent
}

function writeJsonFile(path, jsonList = []) {

}


function init() {
	copyFiles(templateDir, distDir)

	// update json file
	const jsonPath = path.join(distDir, 'tub.config.json')
	const content = replaceMatch(jsonPath, {
		name: 'manage-cl'
	})

	fs.writeFileSync(jsonPath, JSON.stringify(content, null, 2))

}


// init()

console.log(path.delimiter)
