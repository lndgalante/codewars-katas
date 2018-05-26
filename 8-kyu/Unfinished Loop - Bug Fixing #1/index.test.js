const createArray = require('.')

test('Test 1', () => {
  expect(createArray(1)).toEqual([1])
})

test('Test 2', () => {
  expect(createArray(2)).toEqual([1, 2])
})

test('Test 3', () => {
  expect(createArray(3)).toEqual([1, 2, 3])
})

test('Test 4', () => {
  expect(createArray(4)).toEqual([1, 2, 3, 4])
})

test('Test 5', () => {
  expect(createArray(5)).toEqual([1, 2, 3, 4, 5])
})
