const expressionMatter = require('.')

test('Test 1', () => {
  expect(expressionMatter(10, 5, 6)).toBe(300)
})

test('Test 2', () => {
  expect(expressionMatter(2, 1, 2)).toBe(6)
})

test('Test 3', () => {
  expect(expressionMatter(2, 1, 1)).toBe(4)
})

test('Test 4', () => {
  expect(expressionMatter(1, 1, 1)).toBe(3)
})

test('Test 5', () => {
  expect(expressionMatter(1, 2, 3)).toBe(9)
})

test('Test 6', () => {
  expect(expressionMatter(1, 3, 1)).toBe(5)
})

test('Test 7', () => {
  expect(expressionMatter(2, 2, 2)).toBe(8)
})

test('Test 8', () => {
  expect(expressionMatter(5, 1, 3)).toBe(20)
})

test('Test 9', () => {
  expect(expressionMatter(3, 5, 7)).toBe(105)
})

test('Test 10', () => {
  expect(expressionMatter(5, 6, 1)).toBe(35)
})

test('Test 11', () => {
  expect(expressionMatter(1, 6, 1)).toBe(8)
})

test('Test 12', () => {
  expect(expressionMatter(2, 6, 1)).toBe(14)
})
