const sumCircles = require('.')

test('Test 1', () => {
  expect(sumCircles(2)).toBe('We have this much circle: 3')
})

test('Test 2', () => {
  expect(sumCircles(2, 3, 4)).toBe('We have this much circle: 23')
})

test('Test 3', () => {
  expect(sumCircles(1, 1, 1)).toBe('We have this much circle: 2')
})

test('Test 4', () => {
  expect(sumCircles(13.58, 14.9, 56.99, 107.321)).toBe('We have this much circle: 11916')
})
