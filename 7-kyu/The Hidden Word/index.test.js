const hiddenWord = require('.')

test('Test 1', () => {
  expect(hiddenWord(637)).toBe('aid')
})

test('Test 2', () => {
  expect(hiddenWord(7415)).toBe('debt')
})

test('Test 3', () => {
  expect(hiddenWord(49632)).toBe('email')
})
