const getSum = require('./index')

test('Test 1', () => {
  expect(getSum(0, -1)).toBe(-1)
})

test('Test 2', () => {
  expect(getSum(-1, 0)).toBe(-1)
})

test('Test 3', () => {
  expect(getSum(0, 1)).toBe(1)
})

test('Test 4', () => {
  expect(getSum(1, 0)).toBe(1)
})

test('Test 5', () => {
  expect(getSum(1, 2)).toBe(3)
})

test('Test 6', () => {
  expect(getSum(1, 1)).toBe(1)
})

test('Test 7', () => {
  expect(getSum(-1, 2)).toBe(2)
})

test('Test 8', () => {
  expect(getSum(280, 84)).toBe(35854)
})
