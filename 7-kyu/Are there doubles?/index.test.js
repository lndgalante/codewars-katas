const doubleCheck = require('.')

test('Test 1', () => {
  expect(doubleCheck('abca')).toBeFalse()
})

test('Test 2', () => {
  expect(doubleCheck('aabc')).toBeTrue()
})

test('Test 3', () => {
  expect(doubleCheck('a 11 c d')).toBeTrue()
})

test('Test 4', () => {
  expect(doubleCheck('AabBcC')).toBeTrue()
})

test('Test 5', () => {
  expect(doubleCheck('a b  c')).toBeTrue()
})

test('Test 6', () => {
  expect(doubleCheck('a b c d e f g h i h k')).toBeFalse()
})
