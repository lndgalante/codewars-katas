const arithmeticSequenceSum = require('.')

test('Test 1', () => {
  expect(arithmeticSequenceSum(3, 2, 20)).toBe(440)
})

test('Test 2', () => {
  expect(arithmeticSequenceSum(2, 2, 10)).toBe(110)
})

test('Test 3', () => {
  expect(arithmeticSequenceSum(1, -2, 10)).toBe(-80)
})
