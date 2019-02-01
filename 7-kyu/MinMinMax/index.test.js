const minMinMax = require('.')

test('Test 1', () => {
  expect(minMinMax([-1, 4, 5, -23, 24])).toEqual([-23, -22, 24])
})

test('Test 2', () => {
  expect(minMinMax([1, 3, -3, -2, 8, -1])).toEqual([-3, 0, 8])
})

test('Test 3', () => {
  expect(minMinMax([2, -4, 8, -5, 9, 7])).toEqual([-5, -3, 9])
})
