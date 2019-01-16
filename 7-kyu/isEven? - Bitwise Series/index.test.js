const isEven = require('.')

test('Test 1', () => {
  expect(isEven(2)).toBeTrue()
})

test('Test 2', () => {
  expect(isEven(3)).toBeFalse()
})

test('Test 3', () => {
  expect(isEven(14)).toBeTrue()
})

test('Test 4', () => {
  expect(isEven(15)).toBeFalse()
})

test('Test 5', () => {
  expect(isEven(26)).toBeTrue()
})

test('Test 6', () => {
  expect(isEven(27)).toBeFalse()
})
