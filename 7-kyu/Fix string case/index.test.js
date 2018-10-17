const solve = require('.')

test('Test 1', () => {
  expect(solve('code')).toBe('code')
})

test('Test 2', () => {
  expect(solve('CODe')).toBe('CODE')
})

test('Test 3', () => {
  expect(solve('COde')).toBe('code')
})

test('Test 4', () => {
  expect(solve('Code')).toBe('code')
})
