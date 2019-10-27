const changeCount = require('.')

test('Test 1', () => {
  expect(changeCount('dime penny dollar')).toBe('$1.11')
})

test('Test 2', () => {
  expect(changeCount('dime penny nickel')).toBe('$0.16')
})

test('Test 3', () => {
  expect(changeCount('quarter quarter')).toBe('$0.50')
})

test('Test 4', () => {
  expect(changeCount('dollar penny dollar')).toBe('$2.01')
})
