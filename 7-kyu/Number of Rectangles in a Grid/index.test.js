const numberOfRectangles = require('.')

test('Test 1', () => {
  expect(numberOfRectangles(4, 4)).toBe(100)
})

test('Test 2', () => {
  expect(numberOfRectangles(5, 5)).toBe(225)
})
