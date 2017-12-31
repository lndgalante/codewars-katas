const seriesSum = require('./index.js')

test('Test 1', () => {
  expect(seriesSum(1)).toBe('1.00')
})

test('Test 2', () => {
  expect(seriesSum(2)).toBe('1.25')
})

test('Test 3', () => {
  expect(seriesSum(3)).toBe('1.39')
})

test('Test 4', () => {
  expect(seriesSum(4)).toBe('1.49')
})

test('Test 5', () => {
  expect(seriesSum(0)).toBe('0.00')
})
