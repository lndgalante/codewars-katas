const { isSubsetOf, isSupersetOf } = require('.')

const A1 = new Set([1, 2, 3])
const A2 = new Set([3, 2, 1])
const B = new Set([1, 2, 3, 4, 5])
const X = new Set([1, 2, 4, 5, 6, 7])

test('Test 1', () => {
  expect(isSubsetOf(A1, A1)).toBeTrue()
})

test('Test 2', () => {
  expect(isSubsetOf(A1, A2)).toBeTrue()
})

test('Test 3', () => {
  expect(isSubsetOf(A1, B)).toBeTrue()
})

test('Test 4', () => {
  expect(!isSubsetOf(A1, X)).toBeTrue()
})

test('Test 5', () => {
  expect(isSupersetOf(A1, A1)).toBeTrue()
})

test('Test 6', () => {
  expect(isSupersetOf(A1, A2)).toBeTrue()
})

test('Test 7', () => {
  expect(isSupersetOf(B, A1)).toBeTrue()
})

test('Test 8', () => {
  expect(!isSupersetOf(A1, X)).toBeTrue()
})
