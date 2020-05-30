// const util = require('util')
let { exec } = require('child_process')


// http://nodejs.cn/api/child_process.html#child_process_child_process_exec_command_options_callback

const openUrl = (url) => {
	switch (process.platform) {
		case 'drawin':
			exec(`open ${url}` /** for mac */ )
			break;

		case 'win32':
			exec(`start ${url}`)
			break;

		default:
			break;
	}
}

module.exports = {
	openUrl
}

// openUrl('http://localhost:' + hostname)
// openUrl('https://github.com/Mrlhz')
