const catMouse = require('.')

test('Test 1', () => {
  expect(catMouse('C....m')).toBe('Escaped!')
})

test('Test 2', () => {
  expect(catMouse('C..m')).toBe('Caught!')
})

test('Test 3', () => {
  expect(catMouse('C.....m')).toBe('Escaped!')
})
