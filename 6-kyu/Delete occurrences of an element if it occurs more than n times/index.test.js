const deleteNth = require('./index.js')

test('Test 1', () => {
  expect(deleteNth([1, 1, 1, 1], 2)).toEqual([1, 1])
})

test('Test 2', () => {
  expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
})

test('Test 3', () => {
  expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([
    1,
    1,
    3,
    3,
    7,
    2,
    2,
    2,
  ])
})
