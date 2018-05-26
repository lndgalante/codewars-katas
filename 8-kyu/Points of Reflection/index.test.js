const symmetricPoint = require('.')

test('Test 1', () => {
  expect(symmetricPoint([0, 0], [1, 1])).toEqual([2, 2])
})

test('Test 2', () => {
  expect(symmetricPoint([2, 6], [-2, -6])).toEqual([-6, -18])
})

test('Test 3', () => {
  expect(symmetricPoint([10, -10], [-10, 10])).toEqual([-30, 30])
})

test('Test 4', () => {
  expect(symmetricPoint([1, -35], [-12, 1])).toEqual([-25, 37])
})

test('Test 5', () => {
  expect(symmetricPoint([1000, 15], [-7, -214])).toEqual([-1014, -443])
})

test('Test 6', () => {
  expect(symmetricPoint([0, 0], [0, 0])).toEqual([0, 0])
})
