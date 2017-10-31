function getMiddle(str) {
  const strArray = str.split('')
  const isLengthEven = str.length % 2 === 0

  if (isLengthEven) {
    const half = strArray.length / 2
    return `${strArray[half - 1]}${strArray[half]}`
  } else {
    const half = Math.floor(strArray.length / 2)
    return strArray[half]
  }
}

console.log(getMiddle('test'))
// => It should return 'es'
console.log(getMiddle('testing'))
// => It should return 't'
console.log(getMiddle('middle'))
// => It should return 'dd'
console.log(getMiddle('A'))
// => It should return 'A'
