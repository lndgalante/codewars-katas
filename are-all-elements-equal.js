/* 
  Description ⚔️
    Create a function eqAll that determines if all elements of a list are equal.
    list can be any iterable, and may be infinite. Return value is a Boolean.

  Examples
    eqAll("aaa") => true
    eqAll("abc") => false
    eqAll("")    => true

    eqAll([0,0,0]) => true
    eqAll([0,1,2]) => false
    eqAll([])      => true

  Notes
    For the function result to be true, the iterable must be finite; false, however, can result from an element finitely far from the left end. There will be no tests with infinite series of equal elements.
    Elements will be primitive values; equality should be strict (===).
 */

// Long Solution

function eqAll(iterable) {
  if (iterable.length === 0 || iterable.size === 0) return true
  if (iterable.length > Number.MAX_SAFE_INTEGER) return false
  if (
    typeof iterable === 'object' &&
    !Array.isArray(iterable) &&
    iterable.size > Number.MAX_SAFE_INTEGER
  )
    return false

  let result

  if (typeof iterable === 'string') {
    const stringSplitted = iterable.split('')
    result = stringSplitted.every(
      (element, index, array) =>
        index + 1 < array.length ? element === array[index + 1] : true
    )
  }

  if (Array.isArray(iterable)) {
    result = iterable.every(
      (element, index, array) =>
        index + 1 < array.length ? element === array[index + 1] : true
    )
  }

  if (
    typeof iterable === 'object' &&
    !Array.isArray(iterable) &&
    iterable.size === 1
  )
    return true

  if (
    typeof iterable === 'object' &&
    !Array.isArray(iterable) &&
    iterable.size > 1
  )
    return false

  if (
    typeof iterable === 'object' &&
    iterable.toString() === '[object Object]'
  ) {
    const keys = Object.keys(iterable)
    const values = Object.values(iterable)
    if (keys.length === 1) return true

    const resultKeys = keys.every(
      (element, index, array) =>
        index + 1 < array.length ? element === array[index + 1] : true
    )
    const resultValues = values.every(
      (element, index, array) =>
        index + 1 < array.length ? element === array[index + 1] : true
    )

    result = resultKeys && resultValues
  }

  return result
}

// Short Solution
function eqAll(iterable) {
  const buffer = Array.from(iterable)
  let pass = true
  let last = buffer[0]

  buffer.map(tick => {
    console.log(tick)
    if (tick !== last) {
      return (pass = false)
    }
  })

  return pass
}

// Test to pass
const set1 = new Set(['7', '6', '8', '9', '3', '2'])
const set2 = new Set([1, 1, 1])
const set3 = new Set([
  'd',
  'g',
  'o',
  'q',
  'r',
  't',
  'e',
  'j',
  'l',
  'u',
  'f',
  'p',
])
const set4 = new Set()

// console.log(eqAll('aaa')) // => It should return true
// console.log(eqAll('abc')) // => It should return false
// console.log(eqAll('')) // => It should return true
// console.log(eqAll([0, 0, 0])) // => It should return true
// console.log(eqAll([0, 1, 2])) // => It should return false
// console.log(eqAll([])) // => It should return true
console.log(eqAll({ a: 1, b: 2, c: 3 })) // => It should return false
console.log(eqAll({ a: 1, b: 1, c: 1 })) // => It should return true
// console.log(eqAll({})) // => It should return false
// console.log(eqAll(set1)) // => It should return true
// console.log(eqAll(set2)) // => It should return true
// console.log(eqAll(set3)) // => It should return false
