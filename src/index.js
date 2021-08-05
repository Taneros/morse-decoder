const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	// write your solution here
	console.log('expression', expr)
	const onlyNumsArr = expr.split(/\*{10}/)
	console.log('OnlyNumbersArr', onlyNumsArr)


	const morzeWordArr = onlyNumsArr.map(element => {

		console.log('onlyNumArr element', element)

		let morzeLetterArr = []

		for (tenNumsChunk of element.match(/.{1,10}/gm)) {
			let str = ''
			console.log('tenNumsChunk', tenNumsChunk)
			// remove padding zeros ->  convert 10 and 11 to '.' and '-'  -> put into a new aray
			for (doubleNum of tenNumsChunk.replace(/(00){1,}/gm, '').match(/.{1,2}/gm)) {
				console.log('doubleNum', doubleNum)
				if (doubleNum === '10') { str += (doubleNum.replace(/10/gm, '.')) }
				if (doubleNum === '11') { str += (doubleNum.replace(/11/gm, '-')) }
			}
			console.log('str', str)
			morzeLetterArr.push(str)
		}
		return morzeLetterArr
	})
	return console.log('morzeWordArr', morzeWordArr)
}

module.exports = {
	decode
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))


/**
 *
 * binary > to morse
 *
 * filter out spaces ******
 *
 * onlyNumbersArr [
'00101010100000000010001011101000101110100000111111',
'00001011110000111111000010111000101110100000111010'
]
 * remove all padding zeros

		use map >> return array

		re
 * devide expr into 10 symbols > push to array
 *
 *
 * morse > words
 *
 *
 *
 * hello world
 *
 * 00 10 10 10 10 00000000 10 00 10 11 10 10 00 101110100000111111**********00001011110000111111000010111000101110100000111010
 * 00  .  .  .  . 00000000  . 00  .  -  .  .
 * 00  h_________ 00000000  e 00  l_________
 *
 *
 *
 **/