const arithmeticSequenceElements = require('.')

test('Test 1', () => {
  expect(arithmeticSequenceElements(1, 2, 5)).toBe('1, 3, 5, 7, 9')
})

test('Test 2', () => {
  expect(arithmeticSequenceElements(1, 0, 5)).toBe('1, 1, 1, 1, 1')
})

test('Test 3', () => {
  expect(arithmeticSequenceElements(1, -3, 10)).toBe(
    '1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
  )
})

test('Test 4', () => {
  expect(arithmeticSequenceElements(100, -10, 10)).toBe(
    '100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
  )
})
