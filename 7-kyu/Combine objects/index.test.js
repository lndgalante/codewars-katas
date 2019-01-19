const combine = require('.')

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

test('Test 1', () => {
  expect(combine(objA, objB)).toEqual({ a: 13, b: 20, c: 36, d: 3 })
})

test('Test 2', () => {
  expect(combine(objA, objC)).toEqual({ a: 15, b: 20, c: 30, d: 11, e: 8 })
})

test('Test 3', () => {
  expect(combine(objA, objB, objC)).toEqual({ a: 18, b: 20, c: 36, d: 14, e: 8 })
})

test('Test 4', () => {
  expect(combine(objA, objC, objD)).toEqual({ a: 15, b: 20, c: 33, d: 11, e: 8 })
})
