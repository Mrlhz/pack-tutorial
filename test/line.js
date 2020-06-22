const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.join(__dirname, './config.ts'), 'utf-8')


let res = file.replace(/(^\s*)?\r?\n/, '\nnew line\n')
	.replace(/(path\:\s*?\[)([\w\W]+)?(\])/gi, '$1$2\t// \'http://qq.com\'\n\t$3')
	.replace(/(versionMap\:\s*?\{)([\w\W]+)?(\})/gi, '$1$2\t// \'http://qq.com\'\n\t$3')

	console.log(res)


