const presses = require('.')

test('Test 1', () => {
  expect(presses('LOL')).toBe(9)
})

test('Test 2', () => {
  expect(presses('HOW R U')).toBe(13)
})

test('Test 3', () => {
  expect(presses('HOW3 R U')).toBe(17)
})
