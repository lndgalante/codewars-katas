const highAndLow = require('.')

test('Test 1', () => {
  expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214')
})

test('Test 2', () => {
  expect(highAndLow('1 -1')).toBe('1 -1')
})

test('Test 3', () => {
  expect(highAndLow('1 1')).toBe('1 1')
})
