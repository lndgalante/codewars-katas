const howManydays = require('.')

test('Test 1', () => {
  expect(howManydays(1)).toBe(31)
})

test('Test 2', () => {
  expect(howManydays(2)).toBe(28)
})

test('Test 3', () => {
  expect(howManydays(3)).toBe(31)
})

test('Test 4', () => {
  expect(howManydays(4)).toBe(30)
})

test('Test 5', () => {
  expect(howManydays(12)).toBe(31)
})
