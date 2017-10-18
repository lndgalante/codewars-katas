/* 
  Description
    Create two functions, max and min which, given an "iterable" as argument would return maximum (and minimum) value of this argument.

  Examples:
    max([1,2,3]) // -> 3
    min([5,3,4]) // -> 3
    "Iterable" argument may be an array, a string or a set.

    max([1,2,3]) // -> 3   ...array 
    max("AZBYC") // -> "Z" ...string
    min({5,6,7}) // -> 5   ...set
    Items/elements of array or set may be number, string or date.


    min([1,2,3]) // -> 1    ...array of integers
    min(["zzz","bb","aaaa"]) // -> "aaaa"   ...array of strings
    max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)]) // -> new Date(2017,1,1)   ...array of dates

    Note You may assume each items/elements of an iterable will be of same type ( no [ 1, 2, "a", "foo", new Date()] )
 */

function max(xx) {
  if (Array.isArray(xx) && Number.isInteger(xx[0])) return Math.max(...xx)

  if (Array.isArray(xx) && typeof xx[0] === 'string' && xx[0].length === 1) {
    const charCode = xx.map(str => str.charCodeAt())
    const maxCharCode = Math.max(...charCode)

    return xx.find(cc => cc.charCodeAt() === maxCharCode)
  }

  if (Array.isArray(xx) && typeof xx[0] === 'string' && xx[0].length > 1) {
    const lengths = xx.map(str => str.length)
    const maxLength = Math.max(...lengths)

    return xx.find(str => str.length === maxLength)
  }

  if (Array.isArray(xx) && xx[0] instanceof Date) {
    const maxDate = Math.max(...xx)

    return xx.find(date => date.getTime() === maxDate)
  }

  if (typeof xx === 'string') {
    const max = Math.max(...xx.split('').map(char => char.charCodeAt()))

    return String.fromCharCode(max)
  }

  if (typeof xx === 'object' && typeof Array.from(xx)[0] === 'string') {
    const array = Array.from(xx)
    const lengths = array.map(str => str.length)
    const minLength = Math.max(...lengths)
    const strMinLength = array.find(str => str.length === minLength)

    return strMinLength
  }

  if (typeof xx === 'object' && typeof Array.from(xx)[0] === 'number') {
    const array = Array.from(xx)
    const maxNumber = Math.max(...array)

    return array.find(str => str.length === maxNumber)
  }
}

function min(xx) {
  if (Array.isArray(xx) && Number.isInteger(xx[0])) return Math.min(...xx)

  if (Array.isArray(xx) && typeof xx[0] === 'string' && xx[0].length === 1) {
    const charCode = xx.map(str => str.charCodeAt())
    const minCharCode = Math.min(...charCode)

    return xx.find(cc => cc.charCodeAt() === minCharCode)
  }

  if (Array.isArray(xx) && typeof xx[0] === 'string' && xx[0].length > 1) {
    const lengths = xx.map(str => str.length)
    const minLength = Math.min(...lengths)

    return xx.find(str => str.length === minLength)
  }

  if (Array.isArray(xx) && xx[0] instanceof Date) {
    const minDate = Math.min(...xx)

    return xx.find(date => date.getTime() === minDate)
  }

  if (typeof xx === 'string') {
    const min = Math.min(...xx.split('').map(char => char.charCodeAt()))

    return String.fromCharCode(min)
  }

  if (typeof xx === 'object' && typeof Array.from(xx)[0] === 'string') {
    const array = Array.from(xx)
    const lengths = array.map(str => str.length)
    const minLength = Math.min(...lengths)
    const strMinLength = array.find(str => str.length === minLength)

    return strMinLength
  }

  if (typeof xx === 'object' && typeof Array.from(xx)[0] === 'number') {
    const array = Array.from(xx)
    const maxNumber = Math.min(...array)

    return array.find(str => str.length === maxNumber)
  }
}

const set = new Set([5, 3, 2, 1, 4])
const set2 = new Set([
  'l1era',
  'dzlhd',
  'wr07',
  'mq22q',
  '6pss',
  'uqq7q',
  'o8k8c',
  'qfhig',
])

console.log(max([1, 2, 3])) // => It should return 3
console.log(min([5, 3, 4])) // => It should return 3
console.log(max([1, 2, 3])) // => It should return 3
console.log(max('AZBYC')) // => It should return Z
console.log(min(set)) // => It should return 1
console.log(max(set)) // => It should return 5
console.log(min([1, 2, 3])) // => It should return 1
console.log(max(['zzz', 'bb', 'aaaa'])) // => It should return 'aaaa'
console.log(
  max([new Date(2017, 1, 1), new Date(2015, 2, 2), new Date(2013, 3, 3)])
) // -> new Date(2017,1,1)   ...array of dates
console.log(min(['lihe', 'kabp', 'umaos', '73is', 'edhav'])) // => It should return '73is'
console.log(max(['xdi1l', '8hya', 'pffcq', 'xy98f'])) // => It should return 'xy98f'
console.log(min(['b', 'a', 'c', 'd', 'e'])) // => It should return 'a'
console.log(min(['e', 'd', 'b', 'c', 'a'])) // => It should return 'a'
console.log(max(['zphmd', 'vw45'])) // => It should return 'zphmd'
console.log(min(set2)) // => It should return '6pss'
console.log(max(set2)) // => It should return 'wr07'
