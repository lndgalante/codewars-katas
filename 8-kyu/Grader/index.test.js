const grader = require('.')

test('Test 1', () => {
  expect(grader(0.9)).toBe('A')
})

test('Test 2', () => {
  expect(grader(0.3)).toBe('F')
})

test('Test 3', () => {
  expect(grader(234)).toBe('F')
})

test('Test 4', () => {
  expect(grader(0.75)).toBe('C')
})

test('Test 5', () => {
  expect(grader(0.7)).toBe('C')
})

test('Test 6', () => {
  expect(grader(0.6)).toBe('D')
})
