const multiplyAll = require('.')

test('Test 1', () => {
  expect(Array.isArray(multiplyAll([1])(1))).toBeTrue()
})

test('Test 2', () => {
  expect(multiplyAll([1, 2])(1).length).toBe(2)
})

test('Test 3', () => {
  expect(multiplyAll([1, 2, 3])(1)).toEqual([1, 2, 3])
})

test('Test 4', () => {
  expect(multiplyAll([1, 2, 3])(2)).toEqual([2, 4, 6])
})

test('Test 5', () => {
  expect(multiplyAll([1, 2, 3])(0)).toEqual([0, 0, 0])
})

test('Test 6', () => {
  expect(multiplyAll([])(10)).toEqual([])
})
