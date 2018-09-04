const roundToNext5 = require('.')

test('Test 1', () => {
  expect(roundToNext5(0)).toBe(0)
})

test('Test 2', () => {
  expect(roundToNext5(1)).toBe(5)
})

test('Test 3', () => {
  expect(roundToNext5(3)).toBe(5)
})

test('Test 4', () => {
  expect(roundToNext5(5)).toBe(5)
})

test('Test 5', () => {
  expect(roundToNext5(7)).toBe(10)
})

test('Test 6', () => {
  expect(roundToNext5(39)).toBe(40)
})

test('Test 7', () => {
  expect(roundToNext5(-1)).toBe(-0)
})

test('Test 8', () => {
  expect(roundToNext5(-5)).toBe(-5)
})
