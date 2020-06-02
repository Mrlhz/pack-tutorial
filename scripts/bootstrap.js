const fs = require('fs')
const path = require('path')

const templateDir = path.resolve(__dirname, '../template/card')
const distDir = path.resolve(__dirname, '../dist')
const files = fs.readdirSync(templateDir)


// files.forEach(file => {

// 	console.log(file)
// })


function deepSync(dir, target, outDirs, dirList = [], fileList = [], copyList = []) {
	fs.readdirSync(dir).forEach(file => {
		const child = path.join(dir, file)
		const output = path.join(outDirs, dir.split(target)[1] || '', file)
		const stat = fs.statSync(child)
		// console.log('file', dir, dir.split(target))
		if (stat.isDirectory()) {
			// dirList.push(child)
			dirList.push(output)
			deepSync(child, target, outDirs, dirList, fileList, copyList)
		} else {
			fileList.push(child)
			copyList.push(output)
		}
	})
}

const dirList = []
const fileList = []
const copyList = []
deepSync(templateDir, 'card', 'D:\\web\\myblog\\manage-cli\\dist\\card', dirList, fileList, copyList)
console.log(dirList, fileList, copyList)



function makepSync(dirs = []) {
	dirs = Array.isArray(dirs) ? dirs : [dirs]
	dirs.forEach(dir => {
		let parts = dir.split(path.sep)
		// console.log(parts)
		for (let i = 1; i <= parts.length; i++) {
			let parent = parts.slice(0, i).join(path.sep)
			// console.log(parent)
			try {
				fs.accessSync(parent)
			} catch (error) {
				fs.mkdirSync(parent)
			}

		}
	})

}

function callback(err) {
  if (err) throw err
  console.log('源文件已拷贝到目标文件')
}

function handleCopyFileSync(copyFileSrc = [], copyFileOutput = []) {

	copyFileSrc.forEach((src, index) => {
		fs.copyFile(src, copyFileOutput[index], callback)
	})
}


makepSync(dirList)
handleCopyFileSync(fileList, copyList)
