

const tenDigit = onlyNumsArr.map(element => {

  console.log('onlyNumArr element', element)

  // take first ten
  for (tenNumsChunk of element.match(/.{1,10}/gm)) {
    let arr = []
    console.log('tenNumsChunk', tenNumsChunk)
    // remove padding zeros ->  convert 10 and 11 to '.' and '-'  ->
    for (doubleNum of tenNumsChunk.replace(/(00){1,}/gm, '').match(/.{1,2}/gm)) {
      console.log('doubleNum', doubleNum)
      if (num === '10') { arr.push(num.replace(/10/gm, '.')) }
      if (num === '11') { arr.push(num.replace(/11/gm, '-')) }
    }
  }

  console.log('arr', arr)

}

















const noPadZeroArr = onlyNumsArr.map(element => {

  let spacedElem = []
  for (double of element.replace(/(00){1,}/gm, '').match(/.{1,2}/gm)) {
    spacedElem.push(double)
  }
  return spacedElem
});
regex /.{ 1, 2 } /gm - any character beween 1 and 2 length



console.log('noPadZeroArr', noPadZeroArr)

replace 10 & 11 with .and -

let morzeCodeArr = noPadZeroArr.map(element => {
  let arr = []

  for (i in element) {
    let num = element[i]
    // console.log('number', num)
    if (num === '10') { arr.push(num.replace(/10/gm, '.')) }
    if (num === '11') { arr.push(num.replace(/11/gm, '-')) }
  }
  return arr
})


console.log('morzeCodeArr', morzeCodeArr)

convert morzeCodeArr to readable strings