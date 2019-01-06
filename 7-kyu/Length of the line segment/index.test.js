const lengthOfLine = require('.')

test('Test 1', () => {
  expect(lengthOfLine([[-3, 4], [10, 5]])).toBe('13.04')
})

test('Test 2', () => {
  expect(lengthOfLine([[0, 0], [1, 1]])).toBe('1.41')
})

test('Test 3', () => {
  expect(lengthOfLine([[0, 0], [-5, -6]])).toBe('7.81')
})

test('Test 4', () => {
  expect(lengthOfLine([[0, 0], [10, 15]])).toBe('18.03')
})

test('Test 5', () => {
  expect(lengthOfLine([[0, 0], [5, 1]])).toBe('5.10')
})

test('Test 6', () => {
  expect(lengthOfLine([[0, 0], [5, 4]])).toBe('6.40')
})

test('Test 7', () => {
  expect(lengthOfLine([[0, 0], [-7, 4]])).toBe('8.06')
})

test('Test 8', () => {
  expect(lengthOfLine([[0, 0], [0, 0]])).toBe('0.00')
})
