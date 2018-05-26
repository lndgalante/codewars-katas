const slope = require('.')

test('Test 1', () => {
  expect(slope([19, 3, 20, 3])).toBe('0')
})

test('Test 2', () => {
  expect(slope([2, 7, 4, -7])).toBe('-7')
})

test('Test 3', () => {
  expect(slope([10, 50, 30, 150])).toBe('5')
})

test('Test 4', () => {
  expect(slope([15, 45, 12, 60])).toBe('-5')
})

test('Test 5', () => {
  expect(slope([10, 20, 20, 80])).toBe('6')
})

test('Test 6', () => {
  expect(slope([-10, 6, -10, 3])).toBe('undefined')
})
