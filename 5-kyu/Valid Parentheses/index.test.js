const validParentheses = require('.')

test('Test 1', () => {
  expect(validParentheses('(')).toBeFalse()
})

test('Test 2', () => {
  expect(validParentheses('()')).toBeTrue()
})

test('Test 3', () => {
  expect(validParentheses(')(()))')).toBeFalse()
})

test('Test 4', () => {
  expect(validParentheses('(())((()())())')).toBeTrue()
})
