const pattern = require('.')

test('Test 1', () => {
  expect(pattern(2)).toBe('22')
})

test('Test 2', () => {
  expect(pattern(1)).toBe('')
})

test('Test 3', () => {
  expect(pattern(5)).toBe('22\n4444')
})

test('Test 4', () => {
  expect(pattern(0)).toBe('')
})

test('Test 5', () => {
  expect(pattern(-25)).toBe('')
})
