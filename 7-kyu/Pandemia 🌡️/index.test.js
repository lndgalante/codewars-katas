const infected = require('.')

test('Test 1', () => {
  expect(infected('01000000X000X011X0X')).toBe(73.33333333333333)
})

test('Test 2', () => {
  expect(infected('01X000X010X011XX')).toBe(72.72727272727273)
})

test('Test 3', () => {
  expect(infected('XXXXX')).toBe(0)
})

test('Test 4', () => {
  expect(infected('0000000010')).toBe(100)
})

test('Test 5', () => {
  expect(infected('X00X000000X10X0100')).toBe(42.857142857142854)
})
