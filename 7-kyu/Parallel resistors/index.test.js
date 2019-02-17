const resistorParallel = require('.')

test('Test 1', () => {
  expect(resistorParallel(20, 20)).toBe(10)
})

test('Test 2', () => {
  expect(resistorParallel(20, 20, 40)).toBe(8)
})
