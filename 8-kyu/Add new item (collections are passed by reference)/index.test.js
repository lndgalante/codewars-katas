const addExtra = require('.')

test('Test 1', () => {
  expect(addExtra([1, 2, 3])).toHaveLength(4)
})

test('Test 2', () => {
  expect(addExtra([1, 2])).toHaveLength(3)
})

test('Test 3', () => {
  expect(addExtra([])).toHaveLength(1)
})
