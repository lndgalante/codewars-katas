const isOpposite = require('.')

test('Test 1', () => {
  expect(isOpposite('ab', 'AB')).toBeTruthy()
})

test('Test 2', () => {
  expect(isOpposite('aB', 'Ab')).toBeTruthy()
})

test('Test 3', () => {
  expect(isOpposite('aBcd', 'AbCD')).toBeTruthy()
})

test('Test 4', () => {
  expect(isOpposite('aBcde', 'AbCD')).toBeFalsy()
})

test('Test 5', () => {
  expect(isOpposite('AB', 'Ab')).toBeFalsy()
})

test('Test 6', () => {
  expect(isOpposite('', '')).toBeFalsy()
})
