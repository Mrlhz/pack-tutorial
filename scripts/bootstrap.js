const fs = require('fs')
const path = require('path')

const defaultRe = /\{\{((?:.|\r?\n)+?)\}\}/g

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
			/* copy && */
			fs.copyFileSync(children, output)
		}

	})

}

function replaceMatch(path, matchList = {}) {
	const jsonContent = require(path)
	console.log(path, jsonContent)
	Object.keys(matchList).forEach(key => {
		jsonContent[key] = matchList[key]
	})

	return jsonContent
}

function writeJsonFile(oldPath, content, newPath) {
	fs.writeFile(newPath ? newPath : oldPath, JSON.stringify(content, null, 2), (e) => {
		if (e) throw e
		if (newPath) fs.unlinkSync(oldPath)
	})
}

function t(object, key) {
	if (!key.includes('.')) {
		return object[key]
	} else {
		return key.split('.').reduce((acc, cur) => {
			if (typeof acc[cur] === 'object') {
				acc = acc[cur]
				return acc
			} else {
				return acc[cur]
			}
		}, object)
	}
}


function init() {
	copyFiles(templateDir, distDir)

	// update json file
	const jsonPath = path.join(distDir, 'tub.config.json')
	const jsonPath2 = path.join(distDir, 'tub.config2.json')
	const content = replaceMatch(jsonPath, {
		name: 'manage-cl',
		'devDependencies.chalk': '^4.0.5'
	})

	// fs.writeFileSync(jsonPath, JSON.stringify(content, null, 2))
	writeJsonFile(jsonPath, content, jsonPath2)

}


// init()

// console.log(path.delimiter)
const target = {
	a: {
		b: {
			c: {
				d: 666
			}
		}
	}
}
const re = t(target, 'a.b.c.d')

console.log(re)
