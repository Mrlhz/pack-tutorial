
const conf = require('./config/index')

const yargs = require('yargs')

const argv = yargs
	.usage('open')
	.option('p', {
		alias: 'port',
		describe: '启动标签页',
		default: 9527
	})
	.version()
	.alias('v', 'version')
	.help()
	.argv;

console.info(argv.port)

(function(){
	return `- [${document.title}](${location.origin + location.hostname})`
})()
