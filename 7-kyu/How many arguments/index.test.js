const argsCount = require('.')

test('Test 1', () => {
  expect(argsCount(1, 2)).toBe(2)
})

test('Test 2', () => {
  expect(argsCount()).toBe(0)
})

test('Test 3', () => {
  expect(argsCount('A', 'B', 'C')).toBe(3)
})
