const solution = require('.')

test('Test 1', () => {
  expect(solution('Testing String', 3)).toBe('Tes...')
})

test('Test 2', () => {
  expect(solution('Testing String', 8)).toBe('Testing ...')
})

test('Test 3', () => {
  expect(solution('Test', 8)).toBe('Test')
})
