const isOpposite = require('.')

test('Test 1', () => {
  expect(isOpposite('ab', 'AB')).toBeTrue()
})

test('Test 2', () => {
  expect(isOpposite('aB', 'Ab')).toBeTrue()
})

test('Test 3', () => {
  expect(isOpposite('aBcd', 'AbCD')).toBeTrue()
})

test('Test 4', () => {
  expect(isOpposite('aBcde', 'AbCD')).toBeFalse()
})

test('Test 5', () => {
  expect(isOpposite('AB', 'Ab')).toBeFalse()
})

test('Test 6', () => {
  expect(isOpposite('', '')).toBeFalse()
})
