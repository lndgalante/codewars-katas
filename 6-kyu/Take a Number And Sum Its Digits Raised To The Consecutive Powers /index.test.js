const sumDigPow = require('./index.js')

test('Test 1', () => {
  expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Test 2', () => {
  expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
})

test('Test 3', () => {
  expect(sumDigPow(10, 100)).toEqual([89])
})

test('Test 4', () => {
  expect(sumDigPow(90, 100)).toEqual([])
})

test('Test 5', () => {
  expect(sumDigPow(90, 150)).toEqual([135])
})

test('Test 6', () => {
  expect(sumDigPow(50, 150)).toEqual([89, 135])
})

test('Test 7', () => {
  expect(sumDigPow(10, 150)).toEqual([89, 135])
})
