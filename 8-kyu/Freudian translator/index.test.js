const toFreud = require('.')

test('Test 1', () => {
  expect(toFreud('')).toBe('')
})

test('Test 2', () => {
  expect(toFreud('test')).toBe('sex')
})

test('Test 3', () => {
  expect(toFreud('This is a test')).toBe('sex sex sex sex')
})

test('Test 4', () => {
  expect(toFreud('This is a longer test')).toBe('sex sex sex sex sex')
})
