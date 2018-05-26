const sumOfN = require('.')

test('Test 1', () => {
  expect(sumOfN(3)).toEqual([0, 1, 3, 6])
})

test('Test 2', () => {
  expect(sumOfN(-4)).toEqual([0, -1, -3, -6, -10])
})

test('Test 3', () => {
  expect(sumOfN(1)).toEqual([0, 1])
})

test('Test 4', () => {
  expect(sumOfN(-6)).toEqual([0, -1, -3, -6, -10, -15, -21])
})
