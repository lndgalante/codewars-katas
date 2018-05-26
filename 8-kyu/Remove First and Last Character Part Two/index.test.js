const array = require('.')

test('Test 1', () => {
  expect(array('')).toBeNull()
})

test('Test 2', () => {
  expect(array('1')).toBeNull()
})

test('Test 3', () => {
  expect(array('1, 3')).toBeNull()
})

test('Test 4', () => {
  expect(array('1,2,3')).toBe('2')
})
