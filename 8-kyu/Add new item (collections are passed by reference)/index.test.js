const addExtra = require('.')

test('Test 1', () => {
  expect(addExtra([1, 2, 3])).toBeArrayOfSize(4)
})

test('Test 2', () => {
  expect(addExtra([1, 2])).toBeArrayOfSize(3)
})

test('Test 3', () => {
  expect(addExtra([])).toBeArrayOfSize(1)
})
