/* 
  Description ⚔️
    Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

    You have to validate input:

    v can be anything (primitive or otherwise)
    if v is ommited, fill the array with undefined
    if n is 0, return an empty array
    if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
    When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

  Examples
    prefill(3,1) --> [1,1,1]

    prefill(2,"abc") --> ['abc','abc']

    prefill("1", 1) --> [1]

    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]

    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
 */

function prefill(n, v) {
  if (typeof n === 'boolean') throw new TypeError(`${n} is invalid`)
  if (n === 0 || Number(n) === 0) return []
  if (!Number(n)) throw new TypeError(`${n} is invalid`)
  if (!isFinite(n)) throw new TypeError(`${n} is invalid`)
  if (!Number.isInteger(Number(n))) throw new TypeError(`${n} is invalid`)
  if (Number(n) < 0) throw new TypeError(`${n} is invalid`)

  const array = []
  array.length = n
  array.fill(v)

  return array
}

// Test to pass
console.log(prefill(3, 1)) // => It should return [1,1,1]
console.log(prefill(2, 'abc')) // => It should return ['abc','abc']
console.log(prefill('1', 1)) // => It should return [1]
// console.log(prefill('xyz', 1)) // => It should return "xyz is invalid"
// console.log(prefill(Infinity, 1)) // => It should return "Infinity is invalid"
console.log(prefill(1.40786757496717, 1)) // => It should return "1.40786757496717 is invalid"
