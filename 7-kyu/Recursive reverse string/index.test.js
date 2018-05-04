const reverse = require('./index.js')

test('Test 1', () => {
  expect(reverse('hello world')).toBe('dlrow olleh')
})

test('Test 2', () => {
  expect(reverse('abcd')).toBe('dcba')
})

test('Test 3', () => {
  expect(reverse('12345')).toBe('54321')
})
