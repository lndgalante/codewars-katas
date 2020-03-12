const combine = require('.')

const objectA = { a: 10, b: 20, c: 30 }
const objectB = { a: 3, c: 6, d: 3 }
const objectC = { a: 5, d: 11, e: 8 }
const objectD = { c: 3 }

test('Test 1', () => {
  expect(combine(objectA, objectB)).toEqual({ a: 13, b: 20, c: 36, d: 3 })
})

test('Test 2', () => {
  expect(combine(objectA, objectC)).toEqual({ a: 15, b: 20, c: 30, d: 11, e: 8 })
})

test('Test 3', () => {
  expect(combine(objectA, objectB, objectC)).toEqual({ a: 18, b: 20, c: 36, d: 14, e: 8 })
})

test('Test 4', () => {
  expect(combine(objectA, objectC, objectD)).toEqual({ a: 15, b: 20, c: 33, d: 11, e: 8 })
})
