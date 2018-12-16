const computerToPhone = require('.')

test('Test 1', () => {
  expect(computerToPhone('0789456123')).toBe('0123456789')
})

test('Test 2', () => {
  expect(computerToPhone('000')).toBe('000')
})

test('Test 3', () => {
  expect(computerToPhone('94561')).toBe('34567')
})

test('Test 4', () => {
  expect(computerToPhone('')).toBe('')
})
