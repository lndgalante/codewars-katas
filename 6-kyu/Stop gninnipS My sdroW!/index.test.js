const spinWords = require('.')

test('Test 1', () => {
  expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
})

test('Test 2', () => {
  expect(spinWords('This is a test')).toBe('This is a test')
})

test('Test 3', () => {
  expect(spinWords('This is another test')).toBe('This is rehtona test')
})
