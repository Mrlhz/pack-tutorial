const fs = require('fs')
const path = require('path')

const templateDir = path.resolve(__dirname, '../template/card')
const distDir = path.resolve(__dirname, '../dist')
const files = fs.readdirSync(templateDir)


files.forEach(file => {

	console.log(file)
})

function makepSync(dir) {
	let parts=dir.split(path.sep);
	for (let i=1;i<=parts.length;i++){
			let parent=parts.slice(0,i).join(path.sep);
			try {
					fs.accessSync(parent);
			} catch (error) {
					fs.mkdirSync(parent);
			}

	}
}
