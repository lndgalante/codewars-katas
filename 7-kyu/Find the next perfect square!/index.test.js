const findNextSquare = require('./index.js')

test('Test 1', () => {
  expect(findNextSquare(121)).toBe(144)
})

test('Test 2', () => {
  expect(findNextSquare(625)).toBe(676)
})

test('Test 3', () => {
  expect(findNextSquare(319225)).toBe(320356)
})

test('Test 4', () => {
  expect(findNextSquare(15241383936)).toBe(15241630849)
})

test('Test 5', () => {
  expect(findNextSquare(15241383936)).toBe(15241630849)
})

test('Test 6', () => {
  expect(findNextSquare(15241383936)).toBe(15241630849)
})

test('Test 7', () => {
  expect(findNextSquare(155)).toBe(-1)
})

test('Test 8', () => {
  expect(findNextSquare(342786627)).toBe(-1)
})
