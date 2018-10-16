const repeater = require('.')

test('Test 1', () => {
  expect(repeater('a', 5)).toBe('aaaaa')
})

test('Test 2', () => {
  expect(repeater('Na', 16)).toBe('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
})

test('Test 3', () => {
  expect(repeater('Wub ', 6)).toBe('Wub Wub Wub Wub Wub Wub ')
})
