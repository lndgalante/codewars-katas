const howManyTimes = require('.')

test('Test 1', () => {
  expect(howManyTimes(40, 15)).toBe(3)
})

test('Test 2', () => {
  expect(howManyTimes(30, 10)).toBe(3)
})

test('Test 3', () => {
  expect(howManyTimes(80, 15)).toBe(6)
})
