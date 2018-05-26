const greet = require('.')

test('Test 1', () => {
  expect(greet('Jim')).toBe('Hello, Jim!')
})

test('Test 2', () => {
  expect(greet('Jane')).toBe('Hello, Jane!')
})

test('Test 3', () => {
  expect(greet('Simon')).toBe('Hello, Simon!')
})
