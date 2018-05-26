const howMuchWater = require('.')

test('Test 1', () => {
  expect(howMuchWater(10, 10, 21)).toBe('Too much clothes')
})

test('Test 2', () => {
  expect(howMuchWater(10, 10, 2)).toBe('Not enough clothes')
})

test('Test 3', () => {
  expect(howMuchWater(10, 11, 20)).toBe(23.58)
})

test('Test 4', () => {
  expect(howMuchWater(50, 15, 29)).toBe(189.87)
})
