const { min, max } = require('.')

test('Test 1', () => {
  expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110)
})

test('Test 2', () => {
  expect(min([42, 54, 65, 87, 0])).toBe(0)
})

test('Test 3', () => {
  expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566)
})

test('Test 4', () => {
  expect(max([5])).toBe(5)
})
