const validParentheses = require('./index.js')

test('Test 1', () => {
  expect(validParentheses('(')).toBeFalsy()
})

test('Test 2', () => {
  expect(validParentheses('()')).toBeTruthy()
})

test('Test 3', () => {
  expect(validParentheses(')(()))')).toBeFalsy()
})

test('Test 4', () => {
  expect(validParentheses('(())((()())())')).toBeTruthy()
})
