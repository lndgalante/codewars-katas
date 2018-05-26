const descendingOrder = require('.')

test('Test 1', () => {
  expect(descendingOrder(0)).toBe(0)
})

test('Test 2', () => {
  expect(descendingOrder(1)).toBe(1)
})

test('Test 3', () => {
  expect(descendingOrder(123456789)).toBe(987654321)
})
