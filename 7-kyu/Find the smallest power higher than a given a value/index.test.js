const findNextPower = require('.')

test('Test 1', () => {
  expect(findNextPower(12385, 3)).toBe(13824)
})

test('Test 2', () => {
  expect(findNextPower(1245678, 5)).toBe(1419857)
})

test('Test 3', () => {
  expect(findNextPower(1245678, 6)).toBe(1771561)
})
