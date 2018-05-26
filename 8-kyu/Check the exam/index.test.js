const checkExam = require('.')

test('Test 1', () => {
  expect(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])).toBe(6)
})

test('Test 2', () => {
  expect(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])).toBe(7)
})

test('Test 3', () => {
  expect(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])).toBe(16)
})

test('Test 4', () => {
  expect(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])).toBe(0)
})
