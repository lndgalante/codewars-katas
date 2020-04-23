const numberToMoney = require('.')

test('Test 1', () => {
  expect(numberToMoney(2546.2562)).toBe('2,546.25')
})

test('Test 2', () => {
  expect(numberToMoney(1500.342626)).toBe('1,500.34')
})

test('Test 3', () => {
  expect(numberToMoney(100.2134)).toBe('100.21')
})
