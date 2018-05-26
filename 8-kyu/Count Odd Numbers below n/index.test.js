const oddCount = require('.')

test('Test 1', () => {
  expect(oddCount(15)).toBe(7)
})

test('Test 2', () => {
  expect(oddCount(15023)).toBe(7511)
})
