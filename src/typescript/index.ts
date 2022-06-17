function greeter(fn: (a: string) => void) {
	fn('Hello, TypeScript')
}

function printToConsole(s: string) {
	console.log(s)
}

greeter(printToConsole)


let list: Array<number | string> = [1, 2, 3, '4']

console.log(list)
