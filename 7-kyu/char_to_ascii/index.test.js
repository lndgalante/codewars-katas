const charToAscii = require('.')

test('Test 1', () => {
  expect(charToAscii('')).toBeNull()
})

test('Test 2', () => {
  expect(charToAscii('a')).toEqual({ a: 97 })
})

test('Test 3', () => {
  expect(charToAscii('aaa')).toEqual({ a: 97 })
})

test('Test 4', () => {
  expect(charToAscii('hello world')).toEqual({ h: 104, e: 101, l: 108, o: 111, w: 119, r: 114, d: 100 })
})
