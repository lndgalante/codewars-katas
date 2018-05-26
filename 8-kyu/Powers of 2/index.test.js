const powersOfTwo = require('.')

test('Test 1', () => {
  expect(powersOfTwo(0)).toEqual([1])
})

test('Test 2', () => {
  expect(powersOfTwo(1)).toEqual([1, 2])
})

test('Test 3', () => {
  expect(powersOfTwo(4)).toEqual([1, 2, 4, 8, 16])
})
