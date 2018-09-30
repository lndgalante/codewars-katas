const sortArray = require('.')

test('Test 1', () => {
  expect(sortArray('12345')).toBe('12345')
})

test('Test 2', () => {
  expect(sortArray('54321')).toBe('12345')
})

test('Test 3', () => {
  expect(sortArray('34251')).toBe('12345')
})
